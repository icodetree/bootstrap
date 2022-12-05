/*============================================================
 * Description : status
 *============================================================*/

function levelGarph() {
    $(".animated-progress span").each(function () {
        let targetPos = $(this).attr("data-progress");
        let $elm = $(".animated-progress--text");
        let $duration = 1000;

        $(this)
            .stop()
            .animate(
                {
                    width: targetPos + "%",
                },
                $duration
            );
        $elm.stop().animate(
            {
                left: targetPos + "%",
            },
            $duration
        );

        $({ val: 0 }).animate(
            { val: targetPos },
            {
                duration: $duration,
                step: function () {
                    var num = numberWithCommas(Math.floor(this.val));
                    $elm.text(num);
                },
                complete: function () {
                    var num = numberWithCommas(Math.floor(this.val));
                    $elm.text(num);
                },
            }
        );

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    });
}
window.addEventListener("load", () => levelGarph());
