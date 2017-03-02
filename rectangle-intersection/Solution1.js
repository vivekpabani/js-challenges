
/*
  Logic:
  two rectangles do not intersect if left edge of one rectangle is on the right of right edge of another rectangle,
  or top edge of one rectangle is below the bottom edge of another rectangle.
  If any of these two conditions is true, then they do not intersect, otherwise they intersect.
*/

function doRectIntersect(rec1, rec2) {

    var x1 = rec1.x,
        y1 = rec1.y,
        width1 = rec1.width,
        height1 = rec1.height;

    var x2 = rec2.x,
        y2 = rec2.y,
        width2 = rec2.width,
        height2 = rec2.height;

    // check if left edge of one rectangle is on the right of right edge of another rectangle.
    if (x1 + width1 < x2 || x2 + width2 < x1) {

        return false;
    }

    // check if top edge of one rectangle is below the bottom edge of another rectangle.
    if (y1 + height1 < y2 || y2 + height2 < y1) {

        return false;
    }

    return true;
}

function testDoRectIntersect(rect1, rect2, expected, testName) {

    var actual;
    console.log("\n" + testName + "\n");
    console.log("Rect1: " + "(" + rect1.x + ", " + rect1.y + ")"
                          + " height: " + rect1.height
                          + " width: " + rect1.width);

    console.log("Rect2: " + "(" + rect2.x + ", " + rect2.y + ")"
                          + " height: " + rect2.height
                          + " width: " + rect2.width);

    actual = doRectIntersect(rect1, rect2);

    console.log("Expected: " + expected);
    console.log("Actual: " + actual);
    console.log(expected==actual?"Passed":"Failed");

}
