import { extendType } from 'nexus';
import moment from 'moment';

export const extendTrialSubscription = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('extendTrialSubscription', {
      type: 'UserSubscription',

      async resolve(__, ____, { prisma, userId }, ___) {
        try {
          if (!userId) throw new Error('Invalid token.');

          const user = await prisma.user.findFirstOrThrow({
            where: { id: userId },
          });

          const subscription = await prisma.subscription.findFirstOrThrow({
            where: { userId: user.id },
          });

          if (subscription.type !== 'TRIAL')
            throw new Error('Invalid subscription type to extend.');

          if (subscription.extended) throw new Error('Already extended trial!');

          const now = new Date();
          const endDate = moment(now).add('7', 'days').toLocaleString();
          const startDate = moment(now).toLocaleString();

          const response = await prisma.subscription.update({
            where: { id: subscription.id },
            data: {
              startDate,
              endDate,
              extended: true,
            },
          });

          return {
            id: response.id,
            type: response.type,
            createdAt: response.createdAt,
            startDate: response.startDate,
            endDate: response.endDate,
            userId: response.userId,
            extended: response.extended,
            user,
          };
        } catch (e) {
          throw e;
        }
      },
    });
  },
});
