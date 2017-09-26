const UiView = {
  functional: true,
  render: function (h, context) {
    return (
      <div class="ui-view">
        { context.children }
      </div>
    )
  }
}

export default UiView
