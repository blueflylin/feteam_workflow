define("willkan/foundation/4.3.1/foundation/foundation.dropdown",["willkan/foundation/4.3.1/foundation/foundation","$"],function(a){var b=window.Foundation||a("willkan/foundation/4.3.1/foundation/foundation");!function(a,c,d){"use strict";b.libs.dropdown={name:"dropdown",version:"4.3.0",settings:{activeClass:"open",is_hover:!1,opened:function(){},closed:function(){}},init:function(c,d,e){return this.scope=c||this.scope,b.inherit(this,"throttle scrollLeft data_options"),"object"==typeof d&&a.extend(!0,this.settings,d),"string"!=typeof d?(this.settings.init||this.events(),this.settings.init):this[d].call(this,e)},events:function(){var b=this;a(this.scope).on("click.fndtn.dropdown","[data-dropdown]",function(c){var d=a.extend({},b.settings,b.data_options(a(this)));c.preventDefault(),d.is_hover||b.toggle(a(this))}).on("mouseenter","[data-dropdown]",function(){var c=a.extend({},b.settings,b.data_options(a(this)));c.is_hover&&b.toggle(a(this))}).on("mouseleave","[data-dropdown-content]",function(){var c=a('[data-dropdown="'+a(this).attr("id")+'"]'),d=a.extend({},b.settings,b.data_options(c));d.is_hover&&b.close.call(b,a(this))}).on("opened.fndtn.dropdown","[data-dropdown-content]",this.settings.opened).on("closed.fndtn.dropdown","[data-dropdown-content]",this.settings.closed),a(d).on("click.fndtn.dropdown",function(c){var d=a(c.target).closest("[data-dropdown-content]");if(!a(c.target).data("dropdown"))return d.length>0&&(a(c.target).is("[data-dropdown-content]")||a.contains(d.first()[0],c.target))?(c.stopPropagation(),void 0):(b.close.call(b,a("[data-dropdown-content]")),void 0)}),a(c).on("resize.fndtn.dropdown",b.throttle(function(){b.resize.call(b)},50)).trigger("resize"),this.settings.init=!0},close:function(c){var d=this;c.each(function(){a(this).hasClass(d.settings.activeClass)&&(a(this).css(b.rtl?"right":"left","-99999px").removeClass(d.settings.activeClass),a(this).trigger("closed"))})},open:function(a,b){this.css(a.addClass(this.settings.activeClass),b),a.trigger("opened")},toggle:function(b){var c=a("#"+b.data("dropdown"));this.close.call(this,a("[data-dropdown-content]").not(c)),c.hasClass(this.settings.activeClass)?this.close.call(this,c):(this.close.call(this,a("[data-dropdown-content]")),this.open.call(this,c,b))},resize:function(){var b=a("[data-dropdown-content].open"),c=a("[data-dropdown='"+b.attr("id")+"']");b.length&&c.length&&this.css(b,c)},css:function(d,e){var f=d.offsetParent(),g=e.offset();if(g.top-=f.offset().top,g.left-=f.offset().left,this.small())d.css({position:"absolute",width:"95%",left:"2.5%","max-width":"none",top:g.top+this.outerHeight(e)});else{if(!b.rtl&&a(c).width()>this.outerWidth(d)+e.offset().left){var h=g.left;d.hasClass("right")&&d.removeClass("right")}else{d.hasClass("right")||d.addClass("right");var h=g.left-(this.outerWidth(d)-this.outerWidth(e))}d.attr("style","").css({position:"absolute",top:g.top+this.outerHeight(e),left:h})}return d},small:function(){return a(c).width()<768||a("html").hasClass("lt-ie9")},off:function(){a(this.scope).off(".fndtn.dropdown"),a("html, body").off(".fndtn.dropdown"),a(c).off(".fndtn.dropdown"),a("[data-dropdown-content]").off(".fndtn.dropdown"),this.settings.init=!1},reflow:function(){}}}(b.zj,this,this.document)});