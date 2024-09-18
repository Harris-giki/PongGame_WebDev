#include <iostream>
using namespace std;

struct Node
{
    int data;
    Node *next;
};
Node *head = new Node();
Node *second = new Node();

int main()
{
head->data=16;
head->next=second;

second->data=19;
second->next=NULL;
}