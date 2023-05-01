let colors = [
    '#A2A2A2',
    '#097158',
    '#703128',
    '#F0C482',
    '#B3837C',
    '#C6B5A9',
    '#584848',
    '#A0A4AD'
]

function hoverIn(x) {
    
    x.style.color = Math.round(Math.random() * colors.length -.5);
}