import { nonNull, stringArg, extendType } from 'nexus';

export const pushNewUserToNotion = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.field('pushNewUserToNotion', {
      type: 'ResponseMessage',
      args: {
        email: nonNull(stringArg()),
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
      },

      async resolve(
        __,
        { email, firstName, lastName },
        { notionInternal, prisma },
        ___
      ) {
        try {
          const response = await notionInternal.pages.create({
            parent: {
              database_id: process.env.NOTION_AUDEANS_DATABASE_ID as string,
            },
            properties: {
              Name: {
                title: [
                  {
                    text: {
                      content: `${firstName} ${lastName}`,
                    },
                  },
                ],
              },
              Email: {
                email: email,
              },
              Subscription: {
                select: {
                  name: 'NO',
                },
              },
              'First Name': {
                rich_text: [
                  {
                    text: {
                      content: firstName,
                    },
                  },
                ],
              },
              'Last Name': {
                rich_text: [
                  {
                    text: {
                      content: lastName,
                    },
                  },
                ],
              },
            },
          });

          await prisma.user.update({
            where: { email },
            data: { notionPageId: response.id },
          });

          return { response: JSON.stringify(response) };
        } catch (error) {
          throw error;
        }
      },
    });
  },
});
