app.get('/', ensureLoggedIn, function(req, res, next) {
    console.log(req.user);
    res.send(`hello ${req.user.displayName}`);
});

app.get('/login', passport.authenticate('auth0', {
        responseType: 'code',
        audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
        scope: 'openid profile'
    }),
    function(req, res) {
        res.redirect("/");
    });

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.get('/callback',
    passport.authenticate('auth0', {
        failureRedirect: '/failure'
    }),
    function(req, res) {
        res.redirect(req.session.returnTo || '/user');
    }
);

app.get('/failure', function(req, res) {
    var error = req.flash("error");
    var error_description = req.flash("error_description");
    req.logout();
    res.render('failure', {
        error: error[0],
        error_description: error_description[0],
    });
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});