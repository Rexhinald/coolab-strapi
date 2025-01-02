module.exports = {
    async afterCreate(event) {
        const { result } = event;

        if (result.publishedAt === null) {
            return;
        }

        try {
            await strapi.plugins['email'].services.email.send({
                to: process.env.SENDGRID_EMAIL,
                from: process.env.SENDGRID_EMAIL,
                subject: 'New Subscriber',
                html: `Email:<a href="mailto:${result.email}">${result.email}</a> has subscribed!`,
            })
        } catch (e) {
            console.log('Err', e)
        }
    }
}
