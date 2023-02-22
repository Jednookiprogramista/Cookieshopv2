const express = require('express');
const {getCookieSettings} = require("../utils/get-cookie-settings");

const orderRouter = express.Router();

orderRouter

    .get('/summary', (req, res) => {
        const {sum, addons, base, allBases, allAddons} = getCookieSettings(req);

        res.render('order/summary', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    })

    .get('/thanks', (req, res) => {
        const {sum} = getCookieSettings(req);

        res
            .clearCookie('cookieBase', {
              // Ze względu na używanie ramki (Repl)
              sameSite: 'none',
              secure: true,
            })
            .clearCookie('cookieAddons', {
              // Ze względu na używanie ramki (Repl)
              sameSite: 'none',
              secure: true,
            })
            .render('order/thanks', {
                sum,
            });
    });

module.exports = {
    orderRouter,
};
