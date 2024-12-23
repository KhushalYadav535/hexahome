 #include<iostream>
 using namespace std;
// int sum( int a, int b);
// void g(void);
// int main(){
// int num1,num2;
// cout<<" enter first number"<<endl;
// cin>>num1;
// cout<<" enter a second number"<<endl;
// cin>>num2;
// cout<<" the sum is "<<sum(num1,num2);
// g();
//     return 0;
// }
// int sum( int a, int b){
//     int c=  a + b;
//     return c;
// }
// void g(){
//     cout<<"hello , good morning"; 
// }
int sub( int , int );
int main(){
    int num1,num2;
    cout<<" enter first number"<<endl;
    cin>>num1;
    cout<<" enter second number"<<endl;
    cin>>num2;
    cout<<" substraction of two number is " << sub(num1,num2)<<endl; 
     int num3,num4;
    cout<<" enter third number"<<endl;
    cin>>num3;
    cout<<" enter fourth number"<<endl;
    cin>>num4;
    cout<<" substraction of two number is " << sub(num3,num4)<<endl; 
     int num5,num6;
    cout<<" enter fifth number"<<endl;
    cin>>num5;
    cout<<" enter sixth number"<<endl;
    cin>>num6;
    cout<<" substraction of two number is " << sub(num5,num6); 

    return 0;

}
int sub(int a , int b){
    int c = a-b;
    return c;
}