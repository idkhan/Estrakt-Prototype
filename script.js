const blob = document.getElementById("bg-blob");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`
    },
    { duration: 3000, fill: "forwards" }
  );
};

$(".trending-tag").click(function () {
  $(".headline-image").removeClass("active");
  $(".trending-tag").removeClass("active");
  let id = $(this).index();
  $(".headline-image").eq(id).addClass("active");
  $(".trending-tag").eq(id).addClass("active");
});