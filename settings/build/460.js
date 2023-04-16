"use strict";(globalThis.webpackChunkreally_simple_ssl=globalThis.webpackChunkreally_simple_ssl||[]).push([[460],{8914:(e,t,s)=>{s.d(t,{Z:()=>l});const l=(0,s(270).Ue)(((e,t)=>({actionIndex:!1,progress:0,maxIndex:1,attemptCount:0,maxAttempts:1,refreshTests:!1,actions:[],setAttemptCount:t=>{e((e=>({attemptCount:t})))},setProgress:t=>{e((e=>({progress:t})))},setActions:t=>{let s=t.length;e((e=>({actions:t,maxIndex:s})))},setRefreshTests:t=>{e((e=>({refreshTests:t})))},setActionIndex:t=>{e((e=>({actionIndex:t})))},setMaxAttempts:t=>{e((e=>({maxAttempts:t})))}})))},1789:(e,t,s)=>{s.d(t,{Z:()=>l});const l=(0,s(270).Ue)(((e,t)=>({licenseStatus:rsssl_settings.licenseStatus,setLicenseStatus:t=>e((e=>({licenseStatus:t})))})))},5460:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var l=s(9307),r=s(4531);const a=(e,t)=>{let s=t.length;for(let l=0;l<s;l++)if(t[l]==e)return!0;return!1};var n=s(9950),i=s(5902),m=s(5736),c=s(8473),o=s(4559),d=s(2485),u=s(1789);const p=e=>{const{fields:t}=(0,o.Z)(),{licenseStatus:r}=(0,u.Z)(),{selectedSubMenuItem:a,subMenu:p}=(0,d.Z)(),[_,g]=(0,l.useState)(null);(0,l.useEffect)((()=>{Promise.all([s.e(898),s.e(307)]).then(s.bind(s,8307)).then((e=>{let{default:t}=e;g((()=>t))}))}),[]);let h,f="https://really-simple-ssl.com/pro/?mtm_campaign=fallback&mtm_source=free&mtm_content=upgrade",E=[];for(const s of t)s.group_id===e.group&&E.push(s);for(const e of p.menu_items)if(e.id===a?h=e:e.menu_items&&(h=e.menu_items.filter((e=>e.id===a))[0]),h)break;for(const t of p.menu_items)if(t.id===a&&t.hasOwnProperty("groups")){let s=t.groups.filter((t=>t.id===e.group));s.length>0&&(h=s[0])}if(!h)return(0,l.createElement)(l.Fragment,null);let v=h.premium_text?h.premium_text:(0,m.__)("Learn more about %sPremium%s","really-simple-ssl");rsssl_settings.pro_plugin_active&&(v="empty"===r||"deactivated"===r?rsssl_settings.messageInactive:rsssl_settings.messageInvalid);let k="valid"!==r&&h.premium,y=!rsssl_settings.networkwide_active&&h.networkwide_required;f=h.upgrade?h.upgrade:f;let N=h.helpLink_text?h.helpLink_text:(0,m.__)("Instructions","really-simple-ssl"),b=(0,i.Z)("main"),w=k||y?"rsssl-disabled":"";return(0,l.createElement)("div",{className:"rsssl-grid-item rsssl-"+h.id+" "+w},h.title&&(0,l.createElement)("div",{className:"rsssl-grid-item-header"},(0,l.createElement)("h3",{className:"rsssl-h4"},h.title),h.helpLink&&"letsencrypt"!==b&&(0,l.createElement)("div",{className:"rsssl-grid-item-controls"},(0,l.createElement)(n.Z,{target:"_blank",className:"rsssl-helplink",text:N,url:h.helpLink})),"letsencrypt"===b&&(0,l.createElement)("div",{className:"rsssl-grid-item-controls"},(0,l.createElement)("a",{href:"#",className:"rsssl-helplink",onClick:e=>(e=>{e.preventDefault(),c.Kr("reset").then((e=>{window.location.href=window.location.href.replace(/#letsencrypt.*/,"&r="+ +new Date+"#letsencrypt/le-system-status")}))})(e)},(0,m.__)("Reset Let's Encrypt","really-simple-ssl")))),(0,l.createElement)("div",{className:"rsssl-grid-item-content"},h.intro&&(0,l.createElement)("div",{className:"rsssl-settings-block-intro"},h.intro),_&&E.map(((e,t)=>(0,l.createElement)(_,{key:"selectedFields-"+t,index:t,field:e,fields:E})))),k&&!y&&(0,l.createElement)("div",{className:"rsssl-locked"},(0,l.createElement)("div",{className:"rsssl-locked-overlay"},(0,l.createElement)("span",{className:"rsssl-task-status rsssl-premium"},(0,m.__)("Upgrade","really-simple-ssl")),(0,l.createElement)("span",null,rsssl_settings.pro_plugin_active&&(0,l.createElement)("span",null,v," ",(0,l.createElement)("a",{className:"rsssl-locked-link",href:"#settings/license"},(0,m.__)("Check license","really-simple-ssl"))),!rsssl_settings.pro_plugin_active&&(0,l.createElement)(n.Z,{target:"_blank",text:v,url:f})))),y&&(0,l.createElement)("div",{className:"rsssl-locked"},(0,l.createElement)("div",{className:"rsssl-locked-overlay"},(0,l.createElement)("span",{className:"rsssl-task-status rsssl-warning"},(0,m.__)("Network feature","really-simple-ssl")),(0,l.createElement)("span",null,(0,m.__)("This feature is only available networkwide.","really-simple-ssl"),(0,l.createElement)(n.Z,{target:"_blank",text:(0,m.__)("Network settings","really-simple-ssl"),url:rsssl_settings.network_link})))))};var _=s(4018);const g=e=>{let t=e.help;t.title||(t.title=t.text,t.text=!1);let s=e.noticesExpanded?"open":"",r=t.url&&-1!==t.url.indexOf("really-simple-ssl.com")?"_blank":"_self";return(0,l.createElement)(l.Fragment,null,t.title&&t.text&&(0,l.createElement)("details",{className:"rsssl-wizard-help-notice rsssl-"+t.label.toLowerCase(),open:s},(0,l.createElement)("summary",null,t.title," ",(0,l.createElement)(_.Z,{name:"chevron-down"})),(0,l.createElement)("div",{dangerouslySetInnerHTML:{__html:t.text}}),t.url&&(0,l.createElement)("div",{className:"rsssl-help-more-info"},(0,l.createElement)("a",{target:r,href:t.url},(0,m.__)("More info","really-simple-ssl")))),t.title&&!t.text&&(0,l.createElement)("div",{className:"rsssl-wizard-help-notice rsssl-"+t.label.toLowerCase()},(0,l.createElement)("p",null,t.title)))};var h=s(8914);const f=()=>{const[e,t]=(0,l.useState)(!0),{progress:s,fieldsLoaded:n,saveFields:i,fields:c,nextButtonDisabled:u}=(0,o.Z)(),{subMenuLoaded:_,subMenu:f,selectedSubMenuItem:E,selectedMainMenuItem:v,nextMenuItem:k,previousMenuItem:y}=(0,d.Z)(),{setRefreshTests:N}=(0,h.Z)(),b=async e=>{!e&&(()=>{const{menu_items:e}=f;for(const t of e)if(t.id===E&&t.tests_only)return!0;return!1})()?N(!0):await i(!0,!0)},{menu_items:w}=f;if(!_||!n||0===w.length)return(0,l.createElement)("div",{className:"cmplz-wizard-settings cmplz-column-2"},(0,l.createElement)("div",{className:"cmplz-grid-item"},(0,l.createElement)("div",{className:"cmplz-grid-item-content"},(0,l.createElement)("div",{className:"cmplz-settings-block-intro"},(0,l.createElement)(r.Z,{lines:"3"})))),(0,l.createElement)("div",{className:"cmplz-grid-item-footer"}));let x=c.filter((e=>e.menu_id===E)),I=[];for(const e of x)a(e.group_id,I)||I.push(e.group_id);let C=[];for(const e of s.notices){let t=!1;if(e.show_with_options&&(t=x.filter((t=>e.show_with_options.includes(t.id))).length>0),t||e.menu_id===E){let t={};t.title=!!e.output.title&&e.output.title,t.label=e.output.label,t.id=e.id,t.text=e.output.msg,t.url=e.output.url,t.linked_field=e.show_with_option,C.push(t)}}for(const e of x.filter((e=>e.help&&!e.conditionallyDisabled))){let t=e.help;0===C.filter((e=>e.id&&e.id===t.id)).length&&C.push(e.help)}let Z=u?`#${v}/${E}`:`#${v}/${k}`,z=(0,m.__)("Save","really-simple-ssl");for(const e of w)e.id===E&&e.tests_only&&(z=(0,m.__)("Refresh","really-simple-ssl"));return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"rsssl-wizard-settings"},I.map(((e,t)=>(0,l.createElement)(p,{key:"settingsGroup-"+t,index:t,group:e,fields:x}))),(0,l.createElement)("div",{className:"rsssl-grid-item-footer"},E!==w[0].id&&(0,l.createElement)("a",{className:"button button-secondary",href:`#${v}/${y}`},(0,m.__)("Previous","complianz-gdpr")),(0,l.createElement)("button",{className:"button button-primary",onClick:e=>b(!1)},z),E!==w[w.length-1].id&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)("a",{disabled:u,className:"button button-primary",href:Z,onClick:e=>b(!0)},(0,m.__)("Save and Continue","complianz-gdpr"))))),(0,l.createElement)("div",{className:"rsssl-wizard-help"},(0,l.createElement)("div",{className:"rsssl-help-header"},(0,l.createElement)("div",{className:"rsssl-help-title rsssl-h4"},(0,m.__)("Notifications","really-simple-ssl")),(0,l.createElement)("div",{className:"rsssl-help-control",onClick:()=>{t(!e)}},!e&&(0,m.__)("Expand all","really-simple-ssl"),e&&(0,m.__)("Collapse all","really-simple-ssl"))),C.map(((t,s)=>(0,l.createElement)(g,{key:"help-"+s,noticesExpanded:e,index:s,help:t,fieldId:t.id})))))}}}]);