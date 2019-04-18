<template>
    <div class="list__item">
        [Computed] {{ computedText }}
    </div>
</template>

<script>
export default {
    props: [
        'data'
    ]
    , computed: {
        formattedName() {
            return (this.data.name || '').replace('a', 'NOT_A');
        }
        , formattedEmail() {
            return (this.data.email || '').replace('@', '[AT]');
        }
        , formattedCountry() {
            return this.data.country ? 'From ' + this.data.country : 'From unknown place.';
        }
        , formattedJob() {
            return this.data.job.title;
        }

        , customOptions() {
            return this.$store.state.customOptionOne + this.$store.state.customOptionTwo + this.$store.state.customOptionThree.bla;
        }

        , computedText() {
            return this.customOptions + ' ||' + this.formattedName + ' ' + this.formattedEmail + '. ' + this.formattedCountry + ' [' + this.formattedJob + ']';
        }
    }
};
</script>
