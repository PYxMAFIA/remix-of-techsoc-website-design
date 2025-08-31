module.exports = {

"[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EventsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share$3e$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/lucide-react/dist/esm/icons/share.js [app-ssr] (ecmascript) <export default as Share>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartOff$3e$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/lucide-react/dist/esm/icons/heart-off.js [app-ssr] (ecmascript) <export default as HeartOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/lucide-react/dist/esm/icons/list.js [app-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rt/remix-of-techsoc-website-design/src/components/ui/tabs.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const mockEvents = {
    upcoming: [
        {
            id: "1",
            title: "AI Workshop: Building LLM Applications",
            description: "Learn to build production-ready LLM applications with hands-on coding sessions and real-world examples.",
            brief: "Hands-on workshop on building LLM applications",
            date: "2024-12-20",
            time: "14:00",
            location: "Tech Hub - Room A",
            type: "workshop",
            capacity: 50,
            registered: 32,
            thumbnail: "/api/placeholder/400/200",
            isVirtual: false,
            speakers: [
                "Dr. Sarah Chen",
                "Alex Rodriguez"
            ],
            sponsors: [
                "TechCorp",
                "AI Innovations"
            ],
            agenda: [
                "Introduction to LLMs",
                "Hands-on Coding",
                "Deployment Strategies"
            ]
        },
        {
            id: "2",
            title: "48-Hour Blockchain Hackathon",
            description: "Build innovative blockchain solutions in teams. Prizes for top projects.",
            brief: "Weekend hackathon focused on blockchain innovation",
            date: "2024-12-22",
            time: "09:00",
            endDate: "2024-12-24",
            location: "Virtual Event",
            type: "hackathon",
            capacity: 200,
            registered: 156,
            thumbnail: "/api/placeholder/400/200",
            isVirtual: true,
            sponsors: [
                "BlockChain Inc",
                "CryptoVentures"
            ]
        }
    ],
    ongoing: [
        {
            id: "3",
            title: "Web3 Summit 2024",
            description: "Three-day summit covering the latest in Web3 technologies.",
            brief: "Comprehensive Web3 technology summit",
            date: "2024-12-15",
            time: "09:00",
            endDate: "2024-12-17",
            location: "Convention Center",
            type: "talk",
            capacity: 500,
            registered: 487,
            thumbnail: "/api/placeholder/400/200",
            isVirtual: false,
            speakers: [
                "Vitalik Buterin",
                "Gavin Wood",
                "Silvio Micali"
            ]
        }
    ],
    past: [
        {
            id: "4",
            title: "React Performance Optimization",
            description: "Deep dive into React performance optimization techniques.",
            brief: "Advanced React performance workshop",
            date: "2024-11-28",
            time: "15:00",
            location: "Tech Hub - Room B",
            type: "workshop",
            capacity: 30,
            registered: 28,
            thumbnail: "/api/placeholder/400/200",
            isVirtual: false,
            recordingUrl: "https://example.com/recording",
            mediaLinks: [
                "https://slides.com/react-perf",
                "https://github.com/react-perf"
            ],
            rating: 4.8,
            speakers: [
                "Dan Abramov",
                "Sophie Alpert"
            ]
        },
        {
            id: "5",
            title: "Startup Pitch Competition",
            description: "Annual startup pitch competition with investor panel.",
            brief: "Startup founders pitch to investors",
            date: "2024-11-20",
            time: "18:00",
            location: "Innovation Hall",
            type: "talk",
            capacity: 100,
            registered: 95,
            thumbnail: "/api/placeholder/400/200",
            isVirtual: false,
            recordingUrl: "https://example.com/recording",
            rating: 4.5
        }
    ]
};
const eventTypes = [
    {
        value: "all",
        label: "All Types"
    },
    {
        value: "workshop",
        label: "Workshop"
    },
    {
        value: "hackathon",
        label: "Hackathon"
    },
    {
        value: "talk",
        label: "Talk"
    }
];
function EventsSection() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("upcoming");
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("list");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedEvent, setSelectedEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showCreateForm, setShowCreateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rsvpStates, setRsvpStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [rating, setRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const filteredEvents = mockEvents[activeTab]?.filter((event)=>{
        const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === "all" || event.type === selectedType;
        return matchesSearch && matchesType;
    }) || [];
    const handleRSVP = (eventId)=>{
        const newState = !rsvpStates[eventId];
        setRsvpStates((prev)=>({
                ...prev,
                [eventId]: newState
            }));
        __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(newState ? "RSVP confirmed!" : "RSVP cancelled");
    };
    const handleShare = (event)=>{
        if (typeof navigator !== "undefined" && navigator.share) {
            navigator.share({
                title: event.title,
                text: event.brief,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Event link copied to clipboard!");
        }
    };
    const handleFeedbackSubmit = ()=>{
        if (rating === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please provide a rating");
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Thank you for your feedback!");
        setRating(0);
        setFeedback("");
    };
    const EventCard = ({ event })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            "data-orchids-id": "src\\components\\EventsSection.tsx:186:4",
            "data-orchids-name": "motion.div",
            layout: true,
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -20
            },
            whileHover: {
                y: -4
            },
            className: "bg-card rounded-lg border border-border overflow-hidden group cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-primary/5",
            onClick: ()=>setSelectedEvent(event),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\EventsSection.tsx:195:6",
                    "data-orchids-name": "div",
                    className: "aspect-video bg-muted relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\EventsSection.tsx:196:8",
                            "data-orchids-name": "div",
                            className: "absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
                        }, void 0, false, {
                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                            lineNumber: 196,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\EventsSection.tsx:197:8",
                            "data-orchids-name": "div",
                            className: "absolute top-4 left-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                "data-orchids-id": "src\\components\\EventsSection.tsx:198:10",
                                "data-orchids-name": "Badge",
                                variant: event.type === "workshop" ? "default" : event.type === "hackathon" ? "secondary" : "outline",
                                children: event.type
                            }, void 0, false, {
                                fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                            lineNumber: 197,
                            columnNumber: 9
                        }, this),
                        activeTab === "past" && event.recordingUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\EventsSection.tsx:203:10",
                            "data-orchids-name": "div",
                            className: "absolute top-4 right-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                "data-orchids-id": "src\\components\\EventsSection.tsx:204:12",
                                "data-orchids-name": "Badge",
                                variant: "outline",
                                className: "bg-background/80 backdrop-blur-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        "data-orchids-id": "src\\components\\EventsSection.tsx:205:14",
                                        "data-orchids-name": "Play",
                                        className: "h-3 w-3 mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    "Recording"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                    lineNumber: 195,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\EventsSection.tsx:212:6",
                    "data-orchids-name": "div",
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\EventsSection.tsx:213:8",
                            "data-orchids-name": "div",
                            className: "flex items-start justify-between mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:214:10",
                                    "data-orchids-name": "h3",
                                    className: "font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors",
                                    children: event.title
                                }, void 0, false, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 214,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:217:10",
                                    "data-orchids-name": "Button",
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        handleShare(event);
                                    },
                                    className: "opacity-0 group-hover:opacity-100 transition-opacity",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share$3e$__["Share"], {
                                        "data-orchids-id": "src\\components\\EventsSection.tsx:226:12",
                                        "data-orchids-name": "Share",
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 217,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                            lineNumber: 213,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src\\components\\EventsSection.tsx:230:8",
                            "data-orchids-name": "p",
                            className: "text-muted-foreground text-sm mb-4 line-clamp-2",
                            children: event.brief
                        }, void 0, false, {
                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                            lineNumber: 230,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\EventsSection.tsx:234:8",
                            "data-orchids-name": "div",
                            className: "space-y-2 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:235:10",
                                    "data-orchids-name": "div",
                                    className: "flex items-center text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:236:12",
                                            "data-orchids-name": "Calendar",
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 236,
                                            columnNumber: 13
                                        }, this),
                                        event.date,
                                        " at ",
                                        event.time,
                                        event.endDate && ` - ${event.endDate}`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 235,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:240:10",
                                    "data-orchids-name": "div",
                                    className: "flex items-center text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:241:12",
                                            "data-orchids-name": "MapPin",
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 241,
                                            columnNumber: 13
                                        }, this),
                                        event.location,
                                        event.isVirtual && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:244:14",
                                            "data-orchids-name": "Badge",
                                            variant: "outline",
                                            className: "ml-2 text-xs",
                                            children: "Virtual"
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 240,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:247:10",
                                    "data-orchids-name": "div",
                                    className: "flex items-center text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:248:12",
                                            "data-orchids-name": "Users",
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 248,
                                            columnNumber: 13
                                        }, this),
                                        event.registered,
                                        "/",
                                        event.capacity,
                                        " registered"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 247,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                            lineNumber: 234,
                            columnNumber: 9
                        }, this),
                        activeTab === "past" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\EventsSection.tsx:254:10",
                            "data-orchids-name": "div",
                            className: "flex items-center justify-between",
                            children: [
                                event.rating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:256:14",
                                    "data-orchids-name": "div",
                                    className: "flex items-center text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:257:16",
                                            "data-orchids-name": "Star",
                                            className: "h-4 w-4 mr-1 fill-accent text-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this),
                                        event.rating
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:261:12",
                                    "data-orchids-name": "div",
                                    className: "flex gap-2",
                                    children: [
                                        event.recordingUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:263:16",
                                            "data-orchids-name": "Button",
                                            variant: "outline",
                                            size: "sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:264:18",
                                                    "data-orchids-name": "Play",
                                                    className: "h-4 w-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, this),
                                                "Watch"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this),
                                        event.mediaLinks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:269:16",
                                            "data-orchids-name": "Button",
                                            variant: "outline",
                                            size: "sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:270:18",
                                                    "data-orchids-name": "Download",
                                                    className: "h-4 w-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this),
                                                "Resources"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\EventsSection.tsx:277:10",
                            "data-orchids-name": "div",
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:278:12",
                                    "data-orchids-name": "div",
                                    className: "flex gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        "data-orchids-id": "src\\components\\EventsSection.tsx:279:14",
                                        "data-orchids-name": "Button",
                                        variant: rsvpStates[event.id] ? "default" : "outline",
                                        size: "sm",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            handleRSVP(event.id);
                                        },
                                        children: rsvpStates[event.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:289:20",
                                                    "data-orchids-name": "Heart",
                                                    className: "h-4 w-4 mr-1 fill-current"
                                                }, void 0, false, {
                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 21
                                                }, this),
                                                "RSVP'd"
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartOff$3e$__["HeartOff"], {
                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:294:20",
                                                    "data-orchids-name": "HeartOff",
                                                    className: "h-4 w-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 21
                                                }, this),
                                                "RSVP"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 278,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:300:12",
                                    "data-orchids-name": "div",
                                    className: "w-full max-w-24 bg-muted rounded-full h-2 ml-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\EventsSection.tsx:301:14",
                                        "data-orchids-name": "div",
                                        className: "bg-primary h-2 rounded-full transition-all duration-300",
                                        style: {
                                            width: `${event.registered / event.capacity * 100}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                    lineNumber: 212,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
            lineNumber: 186,
            columnNumber: 5
        }, this);
    const TimelineView = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src\\components\\EventsSection.tsx:313:4",
            "data-orchids-name": "div",
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\EventsSection.tsx:314:6",
                    "data-orchids-name": "div",
                    className: "absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border"
                }, void 0, false, {
                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                    lineNumber: 314,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\EventsSection.tsx:315:6",
                    "data-orchids-name": "div",
                    className: "space-y-8",
                    children: filteredEvents.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            "data-map-index": index,
                            "data-orchids-id": "src\\components\\EventsSection.tsx:317:10@filteredEvents",
                            "data-orchids-name": "motion.div",
                            initial: {
                                opacity: 0,
                                x: index % 2 === 0 ? -20 : 20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                delay: index * 0.1
                            },
                            className: `relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-map-index": index,
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:326:12@filteredEvents",
                                    "data-orchids-name": "div",
                                    className: `w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EventCard, {
                                        "data-map-index": index,
                                        "data-orchids-id": "src\\components\\EventsSection.tsx:327:14@filteredEvents",
                                        "data-orchids-name": "EventCard",
                                        event: event
                                    }, void 0, false, {
                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-map-index": index,
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:329:12@filteredEvents",
                                    "data-orchids-name": "div",
                                    className: "absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"
                                }, void 0, false, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, event.id, true, {
                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                    lineNumber: 315,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
            lineNumber: 313,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "src\\components\\EventsSection.tsx:337:4",
        "data-orchids-name": "section",
        className: "bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src\\components\\EventsSection.tsx:338:6",
            "data-orchids-name": "div",
            className: "container mx-auto px-6 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\components\\EventsSection.tsx:339:8",
                    "data-orchids-name": "div",
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            "data-orchids-id": "src\\components\\EventsSection.tsx:340:10",
                            "data-orchids-name": "h2",
                            className: "font-heading text-4xl font-bold mb-4",
                            children: "Events"
                        }, void 0, false, {
                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src\\components\\EventsSection.tsx:341:10",
                            "data-orchids-name": "p",
                            className: "text-muted-foreground text-lg max-w-2xl mx-auto",
                            children: "Join our community events, workshops, and hackathons to learn, network, and build together."
                        }, void 0, false, {
                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                    lineNumber: 339,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                    "data-orchids-id": "src\\components\\EventsSection.tsx:346:8",
                    "data-orchids-name": "Tabs",
                    value: activeTab,
                    onValueChange: setActiveTab,
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\EventsSection.tsx:347:10",
                            "data-orchids-name": "div",
                            className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:348:12",
                                    "data-orchids-name": "TabsList",
                                    className: "bg-muted p-1 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:349:14",
                                            "data-orchids-name": "TabsTrigger",
                                            value: "upcoming",
                                            className: "data-[state=active]:bg-background data-[state=active]:text-foreground",
                                            children: "Upcoming"
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:352:14",
                                            "data-orchids-name": "TabsTrigger",
                                            value: "ongoing",
                                            className: "data-[state=active]:bg-background data-[state=active]:text-foreground",
                                            children: "Ongoing"
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:355:14",
                                            "data-orchids-name": "TabsTrigger",
                                            value: "past",
                                            className: "data-[state=active]:bg-background data-[state=active]:text-foreground",
                                            children: "Past"
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:360:12",
                                    "data-orchids-name": "div",
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:361:14",
                                            "data-orchids-name": "Button",
                                            variant: viewMode === "list" ? "default" : "outline",
                                            size: "sm",
                                            onClick: ()=>setViewMode("list"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                "data-orchids-id": "src\\components\\EventsSection.tsx:366:16",
                                                "data-orchids-name": "List",
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                lineNumber: 366,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:368:14",
                                            "data-orchids-name": "Button",
                                            variant: viewMode === "timeline" ? "default" : "outline",
                                            size: "sm",
                                            onClick: ()=>setViewMode("timeline"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                "data-orchids-id": "src\\components\\EventsSection.tsx:373:16",
                                                "data-orchids-name": "BarChart3",
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            "data-orchids-id": "src\\components\\EventsSection.tsx:378:10",
                            "data-orchids-name": "AnimatePresence",
                            mode: "wait",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:379:12",
                                    "data-orchids-name": "TabsContent",
                                    value: "upcoming",
                                    className: "mt-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        "data-orchids-id": "src\\components\\EventsSection.tsx:380:14",
                                        "data-orchids-name": "motion.div",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -20
                                        },
                                        transition: {
                                            duration: 0.2
                                        },
                                        children: viewMode === "list" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:388:18",
                                            "data-orchids-name": "div",
                                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                "data-orchids-id": "src\\components\\EventsSection.tsx:389:20",
                                                "data-orchids-name": "AnimatePresence",
                                                children: filteredEvents.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EventCard, {
                                                        "data-orchids-id": "src\\components\\EventsSection.tsx:391:24@filteredEvents",
                                                        "data-orchids-name": "EventCard",
                                                        event: event
                                                    }, event.id, false, {
                                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                lineNumber: 389,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 388,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineView, {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:396:18",
                                            "data-orchids-name": "TimelineView"
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 396,
                                            columnNumber: 19
                                        }, this)
                                    }, "upcoming", false, {
                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:401:12",
                                    "data-orchids-name": "TabsContent",
                                    value: "ongoing",
                                    className: "mt-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        "data-orchids-id": "src\\components\\EventsSection.tsx:402:14",
                                        "data-orchids-name": "motion.div",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -20
                                        },
                                        transition: {
                                            duration: 0.2
                                        },
                                        children: viewMode === "list" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:410:18",
                                            "data-orchids-name": "div",
                                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                "data-orchids-id": "src\\components\\EventsSection.tsx:411:20",
                                                "data-orchids-name": "AnimatePresence",
                                                children: filteredEvents.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EventCard, {
                                                        "data-orchids-id": "src\\components\\EventsSection.tsx:413:24@filteredEvents",
                                                        "data-orchids-name": "EventCard",
                                                        event: event
                                                    }, event.id, false, {
                                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                lineNumber: 411,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 410,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineView, {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:418:18",
                                            "data-orchids-name": "TimelineView"
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 418,
                                            columnNumber: 19
                                        }, this)
                                    }, "ongoing", false, {
                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 401,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:423:12",
                                    "data-orchids-name": "TabsContent",
                                    value: "past",
                                    className: "mt-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        "data-orchids-id": "src\\components\\EventsSection.tsx:424:14",
                                        "data-orchids-name": "motion.div",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -20
                                        },
                                        transition: {
                                            duration: 0.2
                                        },
                                        children: viewMode === "list" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:432:18",
                                            "data-orchids-name": "div",
                                            className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                "data-orchids-id": "src\\components\\EventsSection.tsx:433:20",
                                                "data-orchids-name": "AnimatePresence",
                                                children: filteredEvents.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EventCard, {
                                                        "data-orchids-id": "src\\components\\EventsSection.tsx:435:24@filteredEvents",
                                                        "data-orchids-name": "EventCard",
                                                        event: event
                                                    }, event.id, false, {
                                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                lineNumber: 433,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 432,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimelineView, {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:440:18",
                                            "data-orchids-name": "TimelineView"
                                        }, void 0, false, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 440,
                                            columnNumber: 19
                                        }, this)
                                    }, "past", false, {
                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                            lineNumber: 378,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                    "data-orchids-id": "src\\components\\EventsSection.tsx:448:8",
                    "data-orchids-name": "Dialog",
                    open: !!selectedEvent,
                    onOpenChange: ()=>setSelectedEvent(null),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                        "data-orchids-id": "src\\components\\EventsSection.tsx:449:10",
                        "data-orchids-name": "DialogContent",
                        className: "sm:max-w-3xl max-h-[90vh] overflow-y-auto",
                        children: selectedEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:452:16",
                                    "data-orchids-name": "DialogHeader",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        "data-orchids-id": "src\\components\\EventsSection.tsx:453:18",
                                        "data-orchids-name": "DialogTitle",
                                        className: "text-2xl font-heading",
                                        children: selectedEvent.title
                                    }, void 0, false, {
                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                        lineNumber: 453,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 452,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src\\components\\EventsSection.tsx:458:16",
                                    "data-orchids-name": "div",
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:459:18",
                                            "data-orchids-name": "div",
                                            className: "aspect-video bg-muted rounded-lg relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:460:20",
                                                    "data-orchids-name": "div",
                                                    className: "absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:461:20",
                                                    "data-orchids-name": "div",
                                                    className: "absolute top-4 left-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        "data-orchids-id": "src\\components\\EventsSection.tsx:462:22",
                                                        "data-orchids-name": "Badge",
                                                        variant: selectedEvent.type === "workshop" ? "default" : selectedEvent.type === "hackathon" ? "secondary" : "outline",
                                                        children: selectedEvent.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 459,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src\\components\\EventsSection.tsx:468:18",
                                            "data-orchids-name": "div",
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:469:20",
                                                    "data-orchids-name": "div",
                                                    className: "md:col-span-2 space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:470:22",
                                                            "data-orchids-name": "div",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:471:24",
                                                                    "data-orchids-name": "h3",
                                                                    className: "font-semibold mb-2",
                                                                    children: "Description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:472:24",
                                                                    "data-orchids-name": "p",
                                                                    className: "text-muted-foreground",
                                                                    children: selectedEvent.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 472,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 23
                                                        }, this),
                                                        selectedEvent.agenda && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:476:24",
                                                            "data-orchids-name": "div",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:477:26",
                                                                    "data-orchids-name": "h3",
                                                                    className: "font-semibold mb-2",
                                                                    children: "Agenda"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 477,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:478:26",
                                                                    "data-orchids-name": "ul",
                                                                    className: "space-y-1",
                                                                    children: selectedEvent.agenda.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:480:30",
                                                                            "data-orchids-name": "li",
                                                                            className: "flex items-center text-sm text-muted-foreground",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:481:32",
                                                                                    "data-orchids-name": "Clock",
                                                                                    className: "h-3 w-3 mr-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                                    lineNumber: 481,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                item
                                                                            ]
                                                                        }, index, true, {
                                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                            lineNumber: 480,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 478,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 25
                                                        }, this),
                                                        selectedEvent.speakers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:490:24",
                                                            "data-orchids-name": "div",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:491:26",
                                                                    "data-orchids-name": "h3",
                                                                    className: "font-semibold mb-2",
                                                                    children: "Speakers"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 491,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:492:26",
                                                                    "data-orchids-name": "div",
                                                                    className: "flex flex-wrap gap-2",
                                                                    children: selectedEvent.speakers.map((speaker, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:494:30",
                                                                            "data-orchids-name": "Badge",
                                                                            variant: "outline",
                                                                            children: speaker
                                                                        }, index, false, {
                                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                            lineNumber: 494,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 25
                                                        }, this),
                                                        activeTab === "past" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:501:24",
                                                            "data-orchids-name": "div",
                                                            className: "border-t pt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:502:26",
                                                                    "data-orchids-name": "h3",
                                                                    className: "font-semibold mb-4",
                                                                    children: "Rate this event"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:503:26",
                                                                    "data-orchids-name": "div",
                                                                    className: "space-y-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:504:28",
                                                                            "data-orchids-name": "div",
                                                                            className: "flex gap-1",
                                                                            children: [
                                                                                1,
                                                                                2,
                                                                                3,
                                                                                4,
                                                                                5
                                                                            ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:506:32",
                                                                                    "data-orchids-name": "button",
                                                                                    onClick: ()=>setRating(star),
                                                                                    className: "p-1",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                        "data-orchids-id": "src\\components\\EventsSection.tsx:511:34",
                                                                                        "data-orchids-name": "Star",
                                                                                        className: `h-5 w-5 ${star <= rating ? "fill-accent text-accent" : "text-muted-foreground"}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                                        lineNumber: 511,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, star, false, {
                                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                                    lineNumber: 506,
                                                                                    columnNumber: 33
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                            lineNumber: 504,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:521:28",
                                                                            "data-orchids-name": "Textarea",
                                                                            placeholder: "Share your feedback...",
                                                                            value: feedback,
                                                                            onChange: (e)=>setFeedback(e.target.value)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                            lineNumber: 521,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:526:28@handleFeedbackSubmit",
                                                                            "data-orchids-name": "Button",
                                                                            onClick: handleFeedbackSubmit,
                                                                            children: "Submit Feedback"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                            lineNumber: 526,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 503,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:532:20",
                                                    "data-orchids-name": "div",
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:533:22",
                                                            "data-orchids-name": "div",
                                                            className: "bg-muted p-4 rounded-lg space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:534:24",
                                                                    "data-orchids-name": "div",
                                                                    className: "flex items-center text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:535:26",
                                                                            "data-orchids-name": "Calendar",
                                                                            className: "h-4 w-4 mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                            lineNumber: 535,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        selectedEvent.date,
                                                                        " at ",
                                                                        selectedEvent.time
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 534,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:538:24",
                                                                    "data-orchids-name": "div",
                                                                    className: "flex items-center text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:539:26",
                                                                            "data-orchids-name": "MapPin",
                                                                            className: "h-4 w-4 mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                            lineNumber: 539,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        selectedEvent.location
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 538,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:542:24",
                                                                    "data-orchids-name": "div",
                                                                    className: "flex items-center text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:543:26",
                                                                            "data-orchids-name": "Users",
                                                                            className: "h-4 w-4 mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                            lineNumber: 543,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        selectedEvent.registered,
                                                                        "/",
                                                                        selectedEvent.capacity
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 542,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                            lineNumber: 533,
                                                            columnNumber: 23
                                                        }, this),
                                                        activeTab === "past" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:549:24",
                                                            "data-orchids-name": "div",
                                                            className: "space-y-2",
                                                            children: [
                                                                selectedEvent.recordingUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:551:28",
                                                                    "data-orchids-name": "Button",
                                                                    className: "w-full",
                                                                    asChild: true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        "data-orchids-id": "src\\components\\EventsSection.tsx:552:30",
                                                                        "data-orchids-name": "a",
                                                                        href: selectedEvent.recordingUrl,
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                                "data-orchids-id": "src\\components\\EventsSection.tsx:553:32",
                                                                                "data-orchids-name": "Play",
                                                                                className: "h-4 w-4 mr-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                                lineNumber: 553,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            "Watch Recording"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                        lineNumber: 552,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 551,
                                                                    columnNumber: 29
                                                                }, this),
                                                                selectedEvent.mediaLinks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:559:28",
                                                                    "data-orchids-name": "Button",
                                                                    variant: "outline",
                                                                    className: "w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:560:30",
                                                                            "data-orchids-name": "Download",
                                                                            className: "h-4 w-4 mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                            lineNumber: 560,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        "Download Resources"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 559,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:566:24",
                                                            "data-orchids-name": "div",
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:567:26",
                                                                    "data-orchids-name": "Button",
                                                                    className: "w-full",
                                                                    variant: rsvpStates[selectedEvent.id] ? "default" : "outline",
                                                                    onClick: ()=>handleRSVP(selectedEvent.id),
                                                                    children: rsvpStates[selectedEvent.id] ? "RSVP'd" : "RSVP"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 567,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:574:26",
                                                                    "data-orchids-name": "Button",
                                                                    variant: "outline",
                                                                    className: "w-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:575:28",
                                                                            "data-orchids-name": "Calendar",
                                                                            className: "h-4 w-4 mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                            lineNumber: 575,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Add to Calendar"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 574,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                            lineNumber: 566,
                                                            columnNumber: 25
                                                        }, this),
                                                        selectedEvent.sponsors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:582:24",
                                                            "data-orchids-name": "div",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:583:26",
                                                                    "data-orchids-name": "h4",
                                                                    className: "font-semibold mb-2 text-sm",
                                                                    children: "Sponsors"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 583,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-orchids-id": "src\\components\\EventsSection.tsx:584:26",
                                                                    "data-orchids-name": "div",
                                                                    className: "space-y-1",
                                                                    children: selectedEvent.sponsors.map((sponsor, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rt$2f$remix$2d$of$2d$techsoc$2d$website$2d$design$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            "data-orchids-id": "src\\components\\EventsSection.tsx:586:30",
                                                                            "data-orchids-name": "div",
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: sponsor
                                                                        }, index, false, {
                                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                            lineNumber: 586,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                                    lineNumber: 584,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                            lineNumber: 582,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                            lineNumber: 468,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                                    lineNumber: 458,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                        lineNumber: 449,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
                    lineNumber: 448,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
            lineNumber: 338,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rt/remix-of-techsoc-website-design/src/components/EventsSection.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=rt_remix-of-techsoc-website-design_src_components_EventsSection_tsx_e4a97d41._.js.map