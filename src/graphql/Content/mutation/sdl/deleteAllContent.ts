import { extendType } from 'nexus';

export const deleteAllContent = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('deleteAllContent', {
      type: 'ResponseMessage',

      async resolve(__, ____, { prisma, clerkUserId, s3 }, ___) {
        try {
          if (!clerkUserId) throw new Error('Invalid token.');

          const user = await prisma.user.findFirstOrThrow({
            where: { clerkUserId },
          });

          const content = await prisma.content.findMany({
            where: { userId: user.id },
          });

          if (content.length > 0) {
            const s3objectsToDelete: { Key: string }[] = content
              .map((val) => val.voiceNoteUrl)
              .filter((url): url is string => url !== null && url !== undefined)
              .map((url) => ({ Key: url.split('/').pop() as string }));

            if (s3objectsToDelete.length > 0) {
              await s3
                .deleteObjects({
                  Bucket: 'audea-voice-note',
                  Delete: { Objects: s3objectsToDelete },
                })
                .promise();
            }

            await prisma.content.deleteMany({ where: { userId: user.id } });

            content.forEach(async (val) => {
              const generatedNotionPage =
                await prisma.generatedNotionPage.findFirst({
                  where: { contentId: val.id },
                });

              if (generatedNotionPage) {
                await prisma.generatedNotionPage.delete({
                  where: { id: generatedNotionPage.id },
                });
              }
            });
          }

          return {
            response:
              'Successfully delete all content associated with that userId',
          };
        } catch (e) {
          throw e;
        }
      },
    });
  },
});
