<template>
  <div id="content" v-html="content"></div>
</template>

<script>
import index from '../markdown/index.md'
export default {
  computed: {
    content() {
      return index
    }
  }
}
</script>

<style>
#content {
  background: #fdfdfd;
}

/* ブロック */
h2,
h3,
h4 {
  font-weight: bold;
  padding: 0.5em 20px;
}

h2 {
  font-size: 28px;
  color: #fdfdfd;
  background: #111;
}

h3 {
  font-size: 24px;
  color: #fdfdfd;
  background: #111;
}

h4 {
  font-size: 20px;
  color: #111;
  border-bottom: #111 2px solid;
}

.lyric,
.article,
.profile,
.list,
.music,
.scroll,
.link {
  margin: 10px 20px;
}

.scroll {
  padding: 10px;
  overflow-y: scroll;
  box-shadow: 1px 1px 5px -1px #2a2a2a inset;
  border: solid 1px #2a2a2a;
  max-height: 300px;
}

/*  */

/* コンテナ */
.logo p {
  font-size: 0;
}

.logo img {
  width: 100%;
}

.lyric > p {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0;
}

.article > p {
  padding: 10px 0px;
  text-indent: 0.5em;
}

.profile .icon {
  max-width: 200px;
}

.profile .icon img {
  width: 100%;
}

.profile table {
  width: 100%;
}

.scroll > ul {
  margin: 10px;
}

.music table {
  padding: 10px 0 20px 0;
}

.music table th {
  padding: 2px;
}

.link p {
  margin: 10px;
}

.music a,
.link a {
  padding: 0.2em 0.5em;
  color: #fdfdfd;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
}

.youtube > a {
  background: #ff0000;
}

.itunes > a {
  background: linear-gradient(#ff5599, #aa55ff);
}

.spotify > a {
  background: #1db954;
}

.amazon > a {
  background: #febd69;
}

.other > a {
  background: linear-gradient(#fe9955, #fe5599);
}

.stores > a {
  background: #111;
}

.twitter > a {
  background: #1da1f2;
}

.fanbox > a {
  background: #ffbb28;
}

.reality > a {
  background: linear-gradient(#5599ff, #ff5599);
}

.nana > a {
  background: #dd316e;
}

.twicas > a {
  background: #3381ff;
}

th {
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  color: #fdfdfd;
}

th.lita {
  background: #fe9955;
}

th.liz {
  background: #f95599;
}

.head {
  font-weight: bold;
  padding: 5px;
  color: #111;
}

td.lita {
  padding: 5px;
  color: #fe9955;
  border: 2px #fe9955 solid;
}

td.liz {
  padding: 5px;
  color: #fe5599;
  border: 2px #fe5599 solid;
}
/*  */
</style>
