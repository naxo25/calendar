const {createApp} = Vue;
const application = createApp({
    data(){
        return{
            meses: {}
        }
    },
    methods:{
        colorDia(dia){
            /**
             * Comentario de ejemplo con DocBlock
             */
            let color = dia/7 == Math.trunc(dia/7) ? "red" : "blue"
            return "color: " + color
        }
    },
    mounted(){

        function dia_inicial(argument) {
            switch (argument) {
                case 'Monday': return 1;
                case 'Tuesday': return 2;
                case 'Wednesday': return 3;
                case 'Thursday': return 4;
                case 'Friday': return 5;
                case 'Saturday': return 6;
                case 'Sunday': return 7;
            }
        }

        const arr = {}
        for (let i = 1; i < 13; i++) {
            let dia1 = moment(i + '/01/2021')
            let mes_name = dia1.format('MMMM') 
            let dia1_name = dia1.format('dddd')
            let diasxmes = dia1.add(1, 'months').subtract(1, 'days')
            this.meses[i] = { cant_dias: Number(diasxmes.format('D')), dia_inicial: dia_inicial(dia1_name), mes_name };
            //console.log(typeof this.meses[i].cant_dias)
        }

    }
});
application.mount('#app')
