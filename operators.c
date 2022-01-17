#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
        float mealValue;
    int tip;
    int tax;
    unsigned int total;
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
    scanf("%f",(float *)&mealValue);
    scanf("%d",&tip);
    scanf("%d",&tax);
    
    total = mealValue + (mealValue*((float)tip/100)) + (mealValue*((float)tax/100)) + .5;
    printf("The total meal cost is %d dollars.", (int)total);
    return 0;


}
