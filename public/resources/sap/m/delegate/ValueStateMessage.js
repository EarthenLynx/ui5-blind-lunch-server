/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/base/Object","sap/ui/core/Core","sap/ui/core/ValueStateSupport","sap/ui/core/Popup","sap/ui/core/library","sap/ui/thirdparty/jquery","sap/ui/dom/jquery/Aria"],function(e,t,o,s,a,i,n){"use strict";var r=i.ValueState;var u=t.extend("sap.m.delegate.ValueState",{constructor:function(e){t.apply(this,arguments);this._oControl=e;this._oPopup=null}});u.prototype.open=function(){var t=this._oControl,o=this.getPopup(),s=this.createDom(),i=a.Dock,r;if(!t||!t.getDomRef()||!o||!s){return}r=n(t.getDomRefForValueStateMessage());o.setContent(s);o.close(0);if(o.getContent()){o.getContent().style.maxWidth=t.getDomRef().offsetWidth+"px"}else{o.getContent().style.maxWidth=""}o.open(this.getOpenDuration(),i.BeginTop,i.BeginBottom,t.getDomRefForValueStateMessage(),null,null,e.system.phone?true:a.CLOSE_ON_SCROLL);var u=n(s);if(r.offset().top<u.offset().top){u.addClass("sapMValueStateMessageBottom")}else{u.addClass("sapMValueStateMessageTop")}n(t.getFocusDomRef()).addAriaDescribedBy(this.getId())};u.prototype.close=function(){var e=this._oControl,t=this._oPopup;if(t){t.close(0)}if(e){n(e.getFocusDomRef()).removeAriaDescribedBy(this.getId())}};u.prototype.getId=function(){var e=this._oControl;if(!e){return""}return typeof e.getValueStateMessageId==="function"?e.getValueStateMessageId():e.getId()+"-message"};u.prototype.getOpenDuration=function(){var e=this._oControl;if(!e){return 0}return e.iOpenMessagePopupDuration===undefined?0:e.iOpenMessagePopupDuration};u.prototype.createPopup=function(t){t=t||this.getId();if(this._oPopup){return this._oPopup}this._oPopup=new a(document.createElement("span"),false,false,false);this._oPopup.attachClosed(function(){n(document.getElementById(t)).remove()});this._oPopup.attachOpened(function(){var t=this._oPopup.getContent(),o=e.browser.msie&&this._oControl&&this._oControl.getFormattedValueStateText&&!!this._oControl.getFormattedValueStateText();if(t&&!o){t.style.zIndex=this._getCorrectZIndex()}}.bind(this));return this._oPopup};u.prototype.getPopup=function(){if(!this._oControl){return null}return this.createPopup()};u.prototype.createDom=function(){var t=this._oControl;if(!t){return null}var a=this.getId(),i=document.createElement("div"),n=t.getValueState(),u=e.browser.msie,p=t.getFormattedValueStateText?t.getFormattedValueStateText():null,l,d,c,f;i.id=a;i.setAttribute("role","tooltip");i.setAttribute("aria-live","assertive");if(n===r.Success||n===r.None){i.className="sapUiInvisibleText"}else{i.className="sapMValueStateMessage sapMValueStateMessage"+n}d=o.getLibraryResourceBundle("sap.m");c=document.createElement("span");c.id=a+"-hidden";if(u){c.className="sapUiHidden";c.setAttribute("aria-hidden","true")}else{c.className="sapUiPseudoInvisibleText"}if(n!==r.None){c.appendChild(document.createTextNode(d.getText("INPUTBASE_VALUE_STATE_"+n.toUpperCase())))}i.appendChild(c);if(!p||!p.getHtmlText()){f=n===r.Success||n===r.None?"":t.getValueStateText()||s.getAdditionalText(t);l=document.createElement("span");l.id=a+"-text";l.appendChild(document.createTextNode(f));i.appendChild(l)}else if(n!==r.Success&&n!==r.None){o.getRenderManager().render(p,i);i.lastElementChild.setAttribute("id",a+"-text")}if(!t.isA("sap.m.Select")&&u){if(!l){i.lastElementChild.setAttribute("id",a+"-text")}else{l.setAttribute("aria-hidden","true")}}return i};u.prototype.destroy=function(){if(this._oPopup){this._oPopup.destroy();this._oPopup=null}this._oControl=null};u.prototype._getCorrectZIndex=function(){var e=this._oControl.$().parents().filter(function(){var e=n(this).css("z-index");return e&&e!=="auto"&&e!=="0"});if(!e.length){return 1}var t=0;e.each(function(){var e=parseInt(n(this).css("z-index"));if(e>t){t=e}});return t+1};return u});