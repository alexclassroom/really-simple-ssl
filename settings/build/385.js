"use strict";(globalThis.webpackChunkreally_simple_ssl=globalThis.webpackChunkreally_simple_ssl||[]).push([[385],{3385:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});var l=t(9307),m=t(4531),r=t(5736),a=t(2485);const n=e=>{const{selectedSubMenuItem:s,selectedMainMenuItem:t,subMenu:m,menu:i}=(0,a.Z)();let c=s===e.menuItem.id;if(e.menuItem.menu_items)for(const t of e.menuItem.menu_items)t.id===s&&(c=!0);let u=c?" rsssl-active":"";u+=e.menuItem.featured?" rsssl-featured":"",u+=e.menuItem.premium&&!rsssl_settings.pro_plugin_active?" rsssl-premium":"";let d="#"+t+"/"+e.menuItem.id;return(0,l.createElement)(l.Fragment,null,e.menuItem.visible&&(0,l.createElement)("div",{className:"rsssl-menu-item"+u},(0,l.createElement)("a",{href:d},(0,l.createElement)("span",null,e.menuItem.title),e.menuItem.featured&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)("span",{className:"rsssl-menu-item-beta-pill"},(0,r.__)("Beta","really-simple-ssl")))),e.menuItem.menu_items&&c&&(0,l.createElement)("div",{className:"rsssl-submenu-item"},e.menuItem.menu_items.map(((e,s)=>e.visible&&(0,l.createElement)(n,{key:"submenuItem"+s,menuItem:e}))))))},i=n;var c=t(1789);const u=e=>{const{subMenu:s,hasPremiumItems:t,subMenuLoaded:n}=(0,a.Z)(),{licenseStatus:u}=(0,c.Z)();return n?(0,l.createElement)("div",{className:"rsssl-wizard-menu rsssl-grid-item"},(0,l.createElement)("div",{className:"rsssl-grid-item-header"},(0,l.createElement)("h1",{className:"rsssl-h4"},s.title)),(0,l.createElement)("div",{className:"rsssl-grid-item-content"},(0,l.createElement)("div",{className:"rsssl-wizard-menu-items"},s.menu_items.map(((e,s)=>(0,l.createElement)(i,{key:"menuItem-"+s,menuItem:e}))),t&&!rsssl_settings.is_premium&&"valid"!==u&&(0,l.createElement)("div",{className:"rsssl-premium-menu-item"},(0,l.createElement)("div",null,(0,l.createElement)("a",{target:"_blank",href:rsssl_settings.upgrade_link,className:"button button-black"},(0,r.__)("Upgrade","really-simple-ssl")))))),(0,l.createElement)("div",{className:"rsssl-grid-item-footer"})):(0,l.createElement)("div",{className:"rsssl-wizard-menu rsssl-grid-item"},(0,l.createElement)("div",{className:"rsssl-grid-item-header"},"...",(0,l.createElement)("h1",{className:"rsssl-h4"})),(0,l.createElement)("div",{className:"rsssl-grid-item-content"},(0,l.createElement)(m.Z,{lines:"3"})))}},4531:(e,s,t)=>{t.d(s,{Z:()=>r});var l=t(9307),m=t(2919);const r=e=>{let s=e.lines;return s||(s=4),e.error&&(s=0),(0,l.createElement)("div",{className:"rsssl-placeholder"},e.error&&(0,l.createElement)(m.Z,{error:e.error}),Array.from({length:s}).map(((e,s)=>(0,l.createElement)("div",{className:"rsssl-placeholder-line",key:"placeholder-"+s}))))}},1789:(e,s,t)=>{t.d(s,{Z:()=>l});const l=(0,t(270).Ue)(((e,s)=>({licenseStatus:rsssl_settings.licenseStatus,setLicenseStatus:s=>e((e=>({licenseStatus:s})))})))}}]);