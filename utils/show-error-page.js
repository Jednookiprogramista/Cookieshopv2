function showErrorPage(res, description) {
    res.render('error', {
        description,
    });
}

module.exports = {
    showErrorPage,
};
