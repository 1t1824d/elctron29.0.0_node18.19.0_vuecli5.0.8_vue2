<template>
  <div>
    <div>接收主进程的消息{{ShowData}}</div>
    <button @click="sendToMain">Send Message to Main</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ShowData:0
    }
  },
  methods: {
    sendToMain() {
      const title = Math.round(Math.random() * 100);
      window.electronAPI.setTitle(title);
    },
  },
  mounted() {
    // 监听主进程的回复
    window.electronAPI.onUpdateCounter((value) => {
      console.log(`接收主进程的消息：`, value);
      this.ShowData=value
    });
  },
  //   beforeDestroy() {
  //     // 在组件销毁前，移除事件监听器
  //  window.ipcRenderer.removeAllListeners("reply-from-main");
  //   },
};
</script>
