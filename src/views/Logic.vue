<template>
    <div class="container">
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <h3>Compute Fibonacci Nth Number</h3>
                    <div class="content">
                        
                        <div class="tester"></div>
                        
                        <b-field
                            label="fibonacci(n)"
                        >
                            <b-input
                                type="number"
                                v-model="num"
                                maxlength="3">
                            </b-input>
                        </b-field>

                        <b-field label="Compute Thread">
                            <div class="block">
                                <b-radio
                                    v-model="method"
                                    native-value="raw">
                                    Main Thread
                                </b-radio>
                                <b-radio
                                    v-model="method"
                                    native-value="webworker">
                                    Use WebWorker
                                </b-radio>
                            </div>
                        </b-field>

                        <button :disabled="running" @click="run" class="button is-primary">Run</button>

                        <h2>
                            <template v-if="running">Computing...</template>
                            <template v-else>{{ returned }}</template>
                        </h2>

                        <p v-if="took">Took {{ took }}ms</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import faker from 'faker';

const heavyOp = function(arg) {
    return arg;
};

export default {
    components: {
    }
    , data() {
        return {
            method: 'raw'
            , returned: null
            , num: 37
            , running: false
            , took: 0
        };
    }
    , created() {
    }
    , methods: {
        async run() {
            if (this.method === 'raw') {
                const p0 = Date.now();
                const fib = (n) => n < 2 ? n : fib(n-1) + fib(n-2);
                
                this.returned = fib(+this.num);
                const p1 = Date.now();
                this.took = p1 - p0;

            } else if (this.method === 'webworker') {
                this.running = true;
                const p0 = Date.now();
                this.$worker.run((arg = 1) => {
                    const fib = (n) => n < 2 ? n : fib(n-1) + fib(n-2);
                    return fib(arg);
                }, [+this.num])
                    .then(message => {
                        this.returned = message;
                    })
                    .finally(() => {
                        this.running = false;
                        const p1 = Date.now();
                        this.took = p1 - p0;
                    });
            }
        }
    }
};
</script>

<style lang="scss">
.tester {
    background-color: #eee;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin: 30px;
    transition: all ease 0.2s;

    &:hover {
        background-color: yellow;
    }
}
</style>
