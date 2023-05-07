module.exports = {
  params: {},
  body: (p) => `
    (module M2_Spacer_Hole (layer F.Cu) (tedit 5D8F8930)
    ${p.at /* parametric position */}
    ${"" /* footprint reference */}
    (attr board_only exclude_from_pos_files exclude_from_bom)
    (fp_text reference "" (at 0 -3.2) (layer F.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text value "" (at 0 3.2) (layer F.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_text user %R (at 0.3 0) (layer F.Fab)
      (effects (font (size 1 1) (thickness 0.15)))
    )
    (fp_circle (center 0 0) (end 2.2 0) (layer Cmts.User) (width 0.15))
    (fp_circle (center 0 0) (end 2.3 0) (layer F.CrtYd) (width 0.05))
    (pad "" np_thru_hole circle (at 0 0) (size 4.5 4.5) (drill 4.3) (layers *.Cu *.Mask))
    )
  `,
};
