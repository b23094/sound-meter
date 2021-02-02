basic.forever(function () {
    if (input.soundLevel() <= 60) {
        basic.showIcon(IconNames.Happy)
    } else if (input.soundLevel() > 60 && input.soundLevel() <= 120) {
        basic.showIcon(IconNames.Confused)
    } else if (input.soundLevel() > 120 && input.soundLevel() <= 180) {
        basic.showIcon(IconNames.Sad)
    } else if (input.soundLevel() > 180) {
        basic.showIcon(IconNames.Angry)
        music.playTone(659, music.beat(BeatFraction.Whole))
    }
})
