#include<iostream>
using namespace std;
int main(){
    /*int n;
    cin>>n;
    if (n>0)
    {
        cout<<"N is positive";
    }
    else{
        cout<<" n is negative";
    }
*/
/*int a,b;
cin>>a>>b;
if (a>b)
{
    cout<<" A is greater";
}
if (b>a)
{
    cout<<" B is greater";
}
*/
// int a;
// cin>>a;
// if (a>0)
// {
//     cout<<" a is positive";
// }

// else if(a<0)
// {
//  cout<<" A is negative";
// }
// else{
//     cout<<" A is equal to zero";
// }
// int a=2;
// int b=a+1;
// if ((a=3)==b)
// {
//     cout<<a;
// }
// else{
//     cout<<a+1;
// }
// int a=24;
// if(a>20)
// {
//     cout<<" LOVE"<<endl;

// }
// else if( a==24){
//     cout<<" lovely";
// }
// else{
//     cout<<" babbar";
// }
char ch;
cin>>ch;
if (ch>='a' &&ch<='z')
{
    cout<<" The given case is lower case"<<endl;
}
else if (ch>='A' && ch<='Z')
{
    cout<<" the given case is upper case"<<endl;
}
else{
    cout<<" the given case is numeric";
}

    return 0;

}