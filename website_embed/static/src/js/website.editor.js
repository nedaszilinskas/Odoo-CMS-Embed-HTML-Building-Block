(function() {
    'use strict';

    var website = openerp.website;
    var _t = openerp._t;

    website.snippet.options.custom_snippet_embed = website.snippet.Option.extend({

        on_prompt: function () {
            var self = this;
            return website.prompt({
                window_title: _t("Embed HTML"),
                textarea: _t("HTML to embed"),
                init: function (field) {
                    return self.$target.html();
                },
            }).then(function (content) {
                self.$target.html(content);
            });
        },

        drop_and_build_snippet: function() {
            var self = this;
            this._super();
            this.on_prompt().fail(function () {
                self.editor.on_remove();
            });
        },

        start : function () {
            var self = this;
            this.$el.find(".js_edit_html").on("click", _.bind(this.on_prompt, this));
            this._super();
        }

    });
})();