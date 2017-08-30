app
    .controller('DominoPartCnt', function DominoPartCnt() {
        

    })
    .directive('dominoPart', function counter() {
        return {
            scope: {
            },
            bindToController: {
                count: '=',
                value: '=',
                size: '=',
            },
            controller: function () {

                this.dominotPartsMasks = {
                    0: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
                    1: [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
                    2: [[1, 0, 0], [0, 0, 0], [0, 0, 1]],
                    3: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
                    4: [[1, 0, 1], [0, 0, 0], [1, 0, 1]],
                    5: [[1, 0, 1], [0, 1, 0], [1, 0, 1]],
                    6: [[1, 0, 1], [1, 0, 1], [1, 0, 1]]
                }

                var mask = this.dominotPartsMasks[this.value];
                this.mask = mask;
            },
            controllerAs: 'dominoPart',
            template: function (elem, attr) {
                
                var size = attr.size;
                if (!size) {
                    size = 10;
                }
                
                var div = '<table class="dominoPart">{{value}}';
                
                div += "<tr ng-repeat='line in dominoPart.dominotPartsMasks[dominoPart.value]'>";
                div += "<td ng-repeat='item in line track by $index' >";
                div += '<div style="width: {{dominoPart.size * 4-2}}px; height: {{dominoPart.size * 4-2}}px">';
                div += '<div style="width: {{dominoPart.size * 2}}px; height: {{dominoPart.size * 2}}px; -webkit-border-radius:{{dominoPart.size}}px; -moz-border-radius: ' +
                    '{{dominoPart.size}}px; border-radius: {{dominoPart.size}}px;background: {{item ? \'black\' : \'white\'}}; margin: {{dominoPart.size}}px" />';
                div += '</div>';
                div += "</td>";
                div += "</tr>";
                
                return div + "</table>";



            }
        };
    });