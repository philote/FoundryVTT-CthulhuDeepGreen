export const registerSettings = function() {

  game.settings.register('cthulhudeepgreen', 'show_special', {
      name: "CDG.settings.special.name",
      hint: "CDG.settings.special.hint",
      scope: "world",
      config: true,
      type: Boolean,
      default: false,
      onChange: _ => window.location.reload()
  });
  
  game.settings.register('cthulhudeepgreen', 'show_exposure', {
    name: "CDG.settings.exposure.name",
    hint: "CDG.settings.exposure.hint",
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
    onChange: _ => window.location.reload()
  });

  game.settings.register("cthulhudeepgreen", "current-exposure", {
    name: "current-exposure",
    scope: "world",
    type: Number,
    default: 0,
    config: false,
    onChange: _ => ui.exposurePanel.render(true)
  });
}