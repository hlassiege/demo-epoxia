export default defineNuxtConfig({
    app: {
        head: {
            script: [
                ...(process.env.PIRSCH_CODE
                    ? [
                        {
                            src: 'https://api.pirsch.io/pirsch.js',
                            id: 'pirschjs',
                            defer: true,
                            'data-code': process.env.PIRSCH_CODE,
                            type: 'text/javascript',
                        },
                    ]
                    : []),
            ],
        },
    },

    extends: [
        '@bloggrify/core',
        '@bloggrify/epoxia'
    ],
})
