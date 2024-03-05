$(document).ready(function () {
  $("#salesTable").DataTable({
    language: {
      url: "//cdn.datatables.net/plug-ins/2.0.1/i18n/es-ES.json",
    },
    lengthMenu: [
      [5, 10, 25, 50, -1],
      [5, 10, 25, 50, "Todos"],
    ],
    pagingType: "full_numbers",
    order: [[3, "asc"]],
    columnDefs: [{ targets: [0, 4, 5], className: "text-center" }],
    dom: "lBfrtip",
  });
});
