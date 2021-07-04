<script>
  let editorState = "stopped";

  const setEditorState = () => {
    switch (editorState) {
      case "stopped":
        editorState = "started";
        return;

      case "started":
        editorState = "paused";
        return;

      case "paused":
        editorState = "started";
        return;
    }
  };

  $: getLabel = () => {
    switch (editorState) {
      case "stopped":
        return "Start";

      case "started":
        return "Pause";

      case "paused":
        return "Resume";

      default:
        break;
    }
  };
</script>

<div class="block column">
  <div>buttons - start/pause, restart, settings</div>
  <div class="is-centered">
    <button on:click={setEditorState}>
      {getLabel()}
    </button>
    <button>start over</button>
    <button>settings</button>
  </div>
  <textarea name="" id="" cols="30" rows="10">{editorState}</textarea>
</div>

<style>
  textarea {
    height: 600px;
    width: 100%;
  }
</style>
