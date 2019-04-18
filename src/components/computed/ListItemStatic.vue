<template>
    <div class="list__item">
        [Static] {{ computedText }}
    </div>
</template>

<script>
export default {
    props: [
        'data'
    ]
    , created() {
        const customOptions = this.$store.state.customOptionOne + this.$store.state.customOptionTwo + this.$store.state.customOptionThree.bla;

        const formattedName = (this.data.name || '').replace('a', 'NOT_A');
        const formattedEmail = (this.data.email || '').replace('@', '[AT]');
        const formattedCountry = this.data.country ? 'From ' + this.data.country : 'From unknown place.';
        const job = this.data.job.title;
        this.computedText = customOptions + ' ||' + formattedName + ' ' + formattedEmail + '. ' + formattedCountry + ' [' + job + ']';
    }
};
</script>
