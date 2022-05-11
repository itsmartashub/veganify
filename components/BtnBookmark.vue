<template>
    <div
        class="recipecard__bookmark bookmark icontainer--bggreen"
        @click.stop="toggleBookmark()"
        :class="{ 'bookmark--saved': isBookmarked }"
    >
        <div class="bookmark__svgs">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.21 37.227"
                class="bookmark__svgs--outline"
            >
                <g id="Group_200" data-name="Group 200">
                    <path
                        id="Path_181"
                        data-name="Path 181"
                        d="M88.758,31.41A1.454,1.454,0,0,0,87.3,32.864a1.372,1.372,0,0,1-.408,1.014,1.578,1.578,0,0,1-1.1.44,1.336,1.336,0,0,1-.988-.415l-7.658-7.87a1.454,1.454,0,0,0-2.084,0L67.407,33.9a1.354,1.354,0,0,1-1,.415,1.552,1.552,0,0,1-1.1-.432,1.345,1.345,0,0,1-.4-1V5.817a2.912,2.912,0,0,1,2.908-2.908H84.4A2.912,2.912,0,0,1,87.3,5.817V25.666a1.454,1.454,0,1,0,2.908,0V5.817A5.823,5.823,0,0,0,84.4,0H67.819A5.823,5.823,0,0,0,62,5.817V32.889a4.266,4.266,0,0,0,1.27,3.072,4.464,4.464,0,0,0,3.113,1.266h.078a4.24,4.24,0,0,0,3.028-1.294l6.616-6.8,6.616,6.8a4.222,4.222,0,0,0,3.035,1.295,4.489,4.489,0,0,0,3.18-1.279,4.3,4.3,0,0,0,1.273-3.083A1.454,1.454,0,0,0,88.758,31.41Z"
                        transform="translate(-62.002)"
                    />
                </g>
            </svg>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 212.045 212.045"
                style="enable-background: new 0 0 212.045 212.045"
                xml:space="preserve"
                class="bookmark__svgs--filled"
            >
                <path
                    d="M167.871,0H44.84C34.82,0,26.022,8.243,26.022,18v182c0,3.266,0.909,5.988,2.374,8.091c1.752,2.514,4.573,3.955,7.598,3.954
	c2.86,0,5.905-1.273,8.717-3.675l55.044-46.735c1.7-1.452,4.142-2.284,6.681-2.284c2.538,0,4.975,0.832,6.68,2.288l54.86,46.724
	c2.822,2.409,5.657,3.683,8.512,3.683c4.828,0,9.534-3.724,9.534-12.045V18C186.022,8.243,177.891,0,167.871,0z"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        recipe: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isBookmarked: false,
        }
    },

    computed: {
        bookmarksIDs() {
            return this.$store.state.bookmarks.bookmarksIDs
        },
    },

    methods: {
        toggleBookmark() {
            this.isBookmarked = !this.isBookmarked

            // if (this.isBookmarked) {
            //     this.$store.dispatch('app/notification', {
            //         display: true,
            //         content: `Recipe has been bookmarked`,
            //         className: 'notification--green',
            //     })
            // } else {
            //     this.$store.dispatch('app/notification', {
            //         display: true,
            //         content: `Recipe has been removed from bookmarks`,
            //         className: 'notification--red',
            //     })
            // }

            setTimeout(() => {
                window.requestAnimationFrame(() => {
                    this.$store.dispatch('bookmarks/toggleBookmarkID', {
                        recipe: this.recipe,
                    })
                })
            }, 0)

            // await this.asyncFor(() => {
            //     this.$store.dispatch('bookmarks/toggleBookmarkID', {
            //         recipe: this.recipe,
            //     })
            // })

            // this.$store.dispatch('bookmarks/toggleBookmarkID', {
            //     recipe: this.recipe,
            // })

            // this.delay(() => {
            //     this.isBookmarked = !this.isBookmarked
            // }, 500).then(() => {
            //     this.$store.dispatch('bookmarks/toggleBookmarkID', {
            //         recipe: this.recipe,
            //     })
            // })

            // if (this.isBookmarked) {
            //     this.$store.dispatch('app/notification', {
            //         display: true,
            //         content: `Recipe has been bookmarked`,
            //         className: 'notification--green',
            //     })
            // } else {
            //     this.$store.dispatch('app/notification', {
            //         display: true,
            //         content: `Recipe has been removed from bookmarks`,
            //         className: 'notification--red',
            //     })
            // }

            // this.hideNotificationAfter(100).then(() => {
            //     this.$store.dispatch('bookmarks/toggleBookmarkID', {
            //         recipe: this.recipe,
            //     })
            //     console.log('test Promise Bookmark')
            // })

            // setTimeout(() => {
            //   if (this.isBookmarked) {
            //     // this.hideNotificationAfter();
            //     this.$store.dispatch("app/notification", {
            //       display: true,
            //       content: `Recipe has been bookmarked`,
            //       className: "notification--green",
            //     });
            //   } else {
            //     // this.hideNotificationAfter();
            //     this.$store.dispatch("app/notification", {
            //       display: true,
            //       content: `Recipe has been removed from bookmarks`,
            //       className: "notification--red",
            //     });
            //   }
            // }, 1);

            // setTimeout(() => {
            //   if (this.isBookmarked) {
            //     this.hideNotificationAfter();
            //     this.$store.commit("app/SET_NOTIFICATION", {
            //       display: true,
            //       content: `Recipe has been bookmarked`,
            //       className: "notification--green",
            //     });
            //   } else {
            //     this.hideNotificationAfter();
            //     this.$store.commit("app/SET_NOTIFICATION", {
            //       display: true,
            //       content: `Recipe has been removed from bookmarks`,
            //       className: "notification--red",
            //     });
            //   }
            // }, 1);
        },

        delay(fn, time = 1000) {
            return new Promise((resolve, reject) => {
                fn()
                setTimeout(() => resolve(), time)
            })
        },

        async asyncFor(callback) {
            // for (let i = 0; i < iters; i++) {
            const promise = new Promise((resolve, _reject) => {
                setTimeout(() => {
                    callback()
                    resolve()
                }, 0)
            })
            await promise
            // }
        },
    },

    mounted() {
        this.isBookmarked = this.bookmarksIDs.includes(this.recipe.id)
    },
}
</script>
