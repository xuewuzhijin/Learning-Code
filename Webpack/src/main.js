console.log('come in')
import $ from 'jQuery'
import './css/css.css'
import './css/less.less'
import './css/styl.styl'
import './css/scss.scss'
$(function () {
    console.log($)
    $('li:odd').css('backgroundColor', 'orange');
    $('li:even').css('backgroundColor', 'yellow');
})