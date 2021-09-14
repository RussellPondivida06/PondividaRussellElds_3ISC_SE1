class Line {
    
    Table (rows, columns)
    {
    this.rows = rows;
    this.columns = columns;
    // getCellCount "method"
    this.getCellCount = function()
    {
    return this.rows * this.columns;
    
    };
    }
}
