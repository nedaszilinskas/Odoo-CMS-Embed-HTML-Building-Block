(function() {
    'use strict';

    var _t = openerp._t;
    var website = openerp.website;
    website.ready().done(function() {
        openerp.Tour.register({
            id: 'website_embed',
            name: _t("Embed HTML Code"),
            steps: [{
                title: _t("Embed HTML Code"),
                content: _t("Let's go through the first steps to embed html code."),
                popover: {
                    next: _t("Start Tutorial"),
                    end: _t("Skip It")
                },
            }, {
                waitNot: '.popover.tour',
                element: 'button[data-action=edit]',
                placement: 'bottom',
                title: _t("Edit This Page"),
                content: _t("Every page of your website can be modified through the <i>Edit</i> button."),
                popover: {
                    fixed: true
                },
            }, {
                element: 'button[data-action=snippet]',
                placement: 'bottom',
                title: _t("Insert Building Blocks"),
                content: _t("Click here to insert blocks of content in the page."),
                popover: {
                    fixed: true
                },
            }, {
                snippet: '#snippet_structure .oe_snippet:has(img[src="/website_embed/static/src/img/thumbnail.png"])',
                placement: 'bottom',
                title: _t("Drag & Drop Embed Building Block"),
                content: _t("Drag the builing block and drop it in your page."),
                popover: {
                    fixed: true
                },
            }, {
                waitFor: '.modal:visible',
                element: '.modal:visible .btn.btn-primary',
                placement: 'bottom',
                title: _t("Save It"),
                content: _t("Click here to save & embed HTML into website."),
                popover: {
                    fixed: true
                },
            }, {
                waitNot: '.modal:visible',
                element: 'button[data-action=save]',
                placement: 'right',
                title: _t("Save your modifications"),
                content: _t("Do not forget to save your modifications by clicking <em>'Save'</em> button."),
                popover: {
                    fixed: true
                },
            }, {
                waitNot: 'button[data-action=save]:visible',
                title: _t("Congratulations"),
                content: _t("Congratulations! You just embeded HTML."),
                popover: {
                    next: _t("Close Tutorial")
                }
            }]
        });
    });

}());