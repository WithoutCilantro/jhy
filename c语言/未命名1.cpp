#include<stdio.h>
#include<string.h>
int main(){
	char s[10001];
	gets(s);
	int i,count=0;
	for(i=0,i<strlen(s);i++){
		if(s[i]<'0'||s[i]>'0'){
			count++;
		}
	}
	printf("%d\n",count);
	return 0;
}