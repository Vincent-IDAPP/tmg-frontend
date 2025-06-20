module.exports = {

"[project]/app/components/Diagramme.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nivo$2f$radar$2f$dist$2f$nivo$2d$radar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@nivo/radar/dist/nivo-radar.mjs [app-ssr] (ecmascript)");
;
;
;
const Diagramme = ({ pupilGrades })=>{
    console.log(pupilGrades);
    const keys = [
        'grade'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nivo$2f$radar$2f$dist$2f$nivo$2d$radar$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveRadar"], {
        data: pupilGrades,
        keys: keys,
        indexBy: "id",
        maxValue: 100,
        margin: {
            top: 70,
            right: 80,
            bottom: 40,
            left: 80
        },
        curve: "linearClosed",
        borderWidth: 2,
        borderColor: {
            from: 'color'
        },
        gridLevels: 5,
        gridShape: "circular",
        gridLabelOffset: 36,
        enableDots: true,
        dotSize: 8,
        dotColor: {
            theme: 'background'
        },
        dotBorderWidth: 2,
        dotBorderColor: {
            from: 'color'
        },
        colors: {
            scheme: 'nivo'
        },
        fillOpacity: 0.25,
        blendMode: "multiply",
        animate: true,
        isInteractive: true
    }, void 0, false, {
        fileName: "[project]/app/components/Diagramme.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Diagramme;
}}),
"[project]/app/css/components/_heading.module.scss.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "heading": "_heading-module-scss-module__9ns0Ta__heading",
  "title": "_heading-module-scss-module__9ns0Ta__title",
});
}}),
"[project]/app/components/Heading.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$css$2f$components$2f$_heading$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/css/components/_heading.module.scss.module.css [app-ssr] (css module)");
;
;
const Heading = ({ title, description })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$css$2f$components$2f$_heading$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$css$2f$components$2f$_heading$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
            children: title
        }, void 0, false, {
            fileName: "[project]/app/components/Heading.jsx",
            lineNumber: 5,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Heading.jsx",
        lineNumber: 4,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Heading;
}}),
"[project]/app/css/pages/_chartsPageContent.module.scss.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "ce2": "_chartsPageContent-module-scss-module__8RzmJG__ce2",
  "cm1": "_chartsPageContent-module-scss-module__8RzmJG__cm1",
  "cm2": "_chartsPageContent-module-scss-module__8RzmJG__cm2",
  "container": "_chartsPageContent-module-scss-module__8RzmJG__container",
  "grade": "_chartsPageContent-module-scss-module__8RzmJG__grade",
  "grades": "_chartsPageContent-module-scss-module__8RzmJG__grades",
  "link": "_chartsPageContent-module-scss-module__8RzmJG__link",
  "schoolGradesPageContent": "_chartsPageContent-module-scss-module__8RzmJG__schoolGradesPageContent",
});
}}),
"[project]/app/components/pages/ChartsPageContent.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Diagramme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Diagramme.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Heading$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Heading.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$css$2f$pages$2f$_chartsPageContent$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/css/pages/_chartsPageContent.module.scss.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
const ChartsPageContent = ({ pupilGrades })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$css$2f$pages$2f$_chartsPageContent$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subSubjectsPageContent,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Heading$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: `Diagramme de `
            }, void 0, false, {
                fileName: "[project]/app/components/pages/ChartsPageContent.jsx",
                lineNumber: 9,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Diagramme$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                pupilGrades: pupilGrades
            }, void 0, false, {
                fileName: "[project]/app/components/pages/ChartsPageContent.jsx",
                lineNumber: 10,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/pages/ChartsPageContent.jsx",
        lineNumber: 8,
        columnNumber: 3
    }, this);
};
const __TURBOPACK__default__export__ = ChartsPageContent;
}}),

};

//# sourceMappingURL=app_a0794fea._.js.map