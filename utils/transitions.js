// import gsap from "gsap";

// export const custom = {
//     name: "custom",
//     mode: "out-in",
//     appear: true,
//     css: false,
//     beforeEnter(el) {
//         console.log("beforeEnter", el);

//         // gsap.set(el.children, {
//         //     y: 150,
//         //     opacity: 0
//         // });

//         gsap.set(el, {
//             y: 150,
//             opacity: 0
//         });
//     },
//     enter(el) {
//         console.log("enter", el);

//         // gsap.to(el.children, {
//         //     delay: 0.5,
//         //     duration: 1,
//         //     y: 0,
//         //     opacity: 1,
//         //     ease: "power1.inOut",
//         //     stagger: {
//         //         each: 0.1,
//         //         from: "edges"
//         //     }
//         // });

//         gsap.to(el, {
//             // delay: 0.5,
//             duration: 1,
//             y: 0,
//             opacity: 1,
//             ease: "power1.inOut"
//         });
//     },
//     afterEnter(el) {
//         console.log("afterEnter", el);
//     }
// };

// u recimo pages/index.vue
// import { custom } from '@/utils/transitions.js'
// export default { transition: custom }
