<template>
    <section>
        <h2>일정 자세히보기</h2>
        <dl class="detailView">
            <dt><strong>제목 : {{this.propsdata[selDataId].title}}</strong></dt>
            <dd>
                <em>날짜 :</em> {{this.propsdata[selDataId].date}}<br>
                <em>우선순위 : </em>{{this.propsdata[selDataId].priority}}<br>
                <em>공개여부:</em> {{this.propsdata[selDataId].private}}<br>
                <em>내용 : </em>ViewViewViewViewViewViewViewViewViewViewView
            </dd>
        </dl>
        <router-link to="/" class="title-button addContainer">리스트보기</router-link>
    </section>
</template>

<script>
export default {
    props: ['propsdata', 'selDataId'],    
    methods: {
       
    },
    data() {
        return {
            datailcontent: null
        }
    },
    created() {
       //console.log(selDataId);
       //this.datailcontent = propsdata[]
       console.log(this.selDataId);
    }
}
</script>

<style>
h2{font-size:16px;color:#35495e;text-align:left;}
h2:before{display:inline-block;content:'';width:5px;height:5px;margin-right:5px;border-radius:100%;background:#0f7a4a;vertical-align:middle;}
.detailView{padding:0 10px;text-align:left;font-size:14px;line-height:21px;}
.detailView dd{margin:15px 0 0;padding:18px;background:#fff;}
.detailView dd em{font-weight:bold;font-style:normal;}
.detailView dd em:before{display:inline-block;content:'-';margin-right:5px;vertical-align:middle;}

.addContainer{
    display: block;
    width: 100%;
    height:100%;
    margin:20px 0 10px;
    border-radius: 5px;
    background: linear-gradient(90deg,#6478fb,#35495e);
    line-height:50px;
    color: #fff;
  }
</style>
