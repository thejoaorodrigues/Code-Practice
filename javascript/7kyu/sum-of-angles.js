//Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
    //code here
    //Through mathematical induction we can prove that the sum of interior angles in an n-sided polygon is:  (n−2)×180°.
    return (n-2)*180
  }