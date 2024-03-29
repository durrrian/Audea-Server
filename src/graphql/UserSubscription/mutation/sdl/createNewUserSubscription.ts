import { arg, extendType } from 'nexus';
import { nonNull } from 'nexus';
import moment from 'moment';
import { Subscription } from '@prisma/client';

export const createNewUserSubscription = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createNewUserSubscription', {
      type: 'UserSubscription',

      args: {
        type: nonNull(
          arg({
            type: 'SubscriptionTypeEnum',
          })
        ),
      },

      async resolve(__, { type }, { prisma, clerkUserId }, ___) {
        try {
          if (!clerkUserId) throw new Error('Invalid token.');

          const user = await prisma.user.findFirstOrThrow({
            where: { clerkUserId },
          });

          const startDate = new Date();
          let endDate: Date | null;

          if (type === 'TRIAL')
            endDate = new Date(
              moment(startDate).add('7', 'days').toISOString()
            );
          else if (type === 'EARLYADOPTER')
            endDate = new Date(
              moment(startDate).add('21', 'days').toISOString()
            );
          else endDate = null;

          if (endDate === null) throw new Error('End date is null.');

          const searchSubscription = await prisma.subscription.findFirst({
            where: { userId: user.id },
          });

          let response: Subscription;

          if (searchSubscription) {
            response = await prisma.subscription.update({
              where: { id: searchSubscription.id },
              data: { startDate, endDate, type },
            });
          } else {
            response = await prisma.subscription.create({
              data: {
                type,
                createdAt: new Date(),
                startDate,
                endDate,
                userId: user.id,
                extended: false,
                clerkUserId: user.clerkUserId,
              },
            });
          }

          return {
            id: response.id,
            type: response.type,
            createdAt: response.createdAt,
            startDate: response.startDate,
            endDate: response.endDate,
            userId: response.userId,
            extended: response.extended,
            clerkUserId: response.clerkUserId,
            user,
          };
        } catch (e) {
          throw e;
        }
      },
    });
  },
});
