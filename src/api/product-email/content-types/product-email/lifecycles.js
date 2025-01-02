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
                subject: 'Product Pricing',
                html: `${result.name} with email:<a href="mailto:${result.email}">${result.email}</a> and phone number:${result.phone} has a message:
                <br/><br />
                <p style="border: 1px solid black; padding: 10px">"<b>${result.message}</b>"</p>
                <br /> about the product "${result.product}"`,
            })
        } catch (e) {
            console.log('Err', e)
        }
    }
}
