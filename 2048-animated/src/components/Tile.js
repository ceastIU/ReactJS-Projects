import React from 'react'

const Tile = ({ tile }) => {
    // 1. tile
    // 2. tile#
    // 3. position_#_#
    // 4. row_from_#_#
    // 5. col_from_#_#
    // 6. isMoving
    // 7. new
    // 8. merged

    let classArray = ['tile'];
    classArray.push('tile'+tile.value)
    if (!tile.mergedInto){
        classArray.push(`position_${tile.row}_${tile.column}`)
    }
    if (tile.mergedInto){
        classArray.push('merged')
    }
    if (tile.isNew()) {
       classArray.push('new') 
    }
    if (tile.hasMoved()) {
        classArray.push(`row_from_${tile.fromRow()}_${tile.toRow()}`)
        classArray.push(`row_from_${tile.fromColumn()}_${tile.toColumn()}`)
        classArray.push('isMoving');
    }

    let classes = classArray.join(" ") 
    return (
        <span className={classes}></span>
    )
}

export default Tile