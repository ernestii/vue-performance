<template>
    <div class="container">
        <section>
            <div class="block">
                <b-radio
                    v-model="componentName"
                    native-value="ListItemComputed">
                    ListItemComputed
                </b-radio>
                <b-radio
                    v-model="componentName"
                    native-value="ListItemStatic">
                    ListItemStatic
                </b-radio>
            </div>
            <button class="button is-primary" @click="fillFakeData">Fill new data</button>
        </section>

        <div class="c-list">
            <component
                v-for="item in list"
                :is="componentName"
                :data="item.data"
                :key="item.key"
            />
        </div>
    </div>
</template>

<script>
import faker from 'faker';
import ListItemComputed from '@/components/computed/ListItemComputed.vue';
import ListItemStatic from '@/components/computed/ListItemStatic.vue';

const COUNT = 2000;

export default {
    components: {
        ListItemComputed
        , ListItemStatic
    }
    , data() {
        return {
            componentName: 'ListItemComputed' // or 'ListItemStatic'
            , list: []
        };
    }
    , created() {
        // Generate fake data
        // this.fillFakeData();
    }
    , methods: {
        fillFakeData() {
            let fakeList = [];
            for (var i = 0; i < COUNT; i++) {
                fakeList.push({
                    data: {
                        name: faker.name.findName()
                        , email: faker.internet.email()
                        , country: faker.address.country()
                        , job: {
                            title: faker.name.jobTitle()
                        }
                    }
                    , key: faker.random.uuid()
                });
            };
            this.list = fakeList;
        }
    }
};
</script>

<style lang="scss">
.c-list {
    margin: 20px 0;
    height: 400px;
    overflow-y: scroll;
    border: 1px solid #eee;

    .list__item {
        padding: 4px 12px;

        &:hover {
            background-color: #fafafa;
        }
    }
}
</style>
