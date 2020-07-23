/*!
 * OpenUI5
 * (c) Copyright 2009-2020 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/core/Core","sap/ui/model/FormatException","sap/ui/model/ParseException","sap/ui/model/ValidateException","sap/ui/model/odata/type/ODataType"],function(e,t,n,o,a,r){"use strict";function i(){return u("EnterYesOrNo",[l(true),l(false)])}function u(e,t){return sap.ui.getCore().getLibraryResourceBundle().getText(e,t)}function l(e){return u(e?"YES":"NO")}function s(t,n){var o;t.oConstraints=undefined;if(n){o=n.nullable;if(o===false||o==="false"){t.oConstraints={nullable:false}}else if(o!==undefined&&o!==true&&o!=="true"){e.warning("Illegal nullable: "+o,null,t.getName())}}}var f=r.extend("sap.ui.model.odata.type.Boolean",{constructor:function(e,t){r.apply(this,arguments);s(this,t)}});f.prototype.formatValue=function(e,t){if(e===null||e===undefined){return null}switch(this.getPrimitiveType(t)){case"any":case"boolean":return e;case"string":return l(e);default:throw new n("Don't know how to format "+this.getName()+" to "+t)}};f.prototype.parseValue=function(e,t){var n;if(e===null||e===""){return null}switch(this.getPrimitiveType(t)){case"boolean":return e;case"string":n=e.trim().toLowerCase();if(n===l(true).toLowerCase()){return true}if(n===l(false).toLowerCase()){return false}throw new o(i());default:throw new o("Don't know how to parse "+this.getName()+" from "+t)}};f.prototype.validateValue=function(e){if(e===null){if(this.oConstraints&&this.oConstraints.nullable===false){throw new a(i())}return}if(typeof e!=="boolean"){throw new a("Illegal "+this.getName()+" value: "+e)}};f.prototype.getName=function(){return"sap.ui.model.odata.type.Boolean"};return f});