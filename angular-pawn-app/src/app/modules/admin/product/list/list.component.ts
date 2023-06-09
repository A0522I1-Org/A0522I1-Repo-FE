import {Component, HostListener, OnInit} from '@angular/core';
import {ProductServiceService} from '../../../../service/product-service.service';
import {CategoryServiceService} from '../../../../service/category-service.service';
import {Category} from '../../../../models/category/Category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  contracts: any;
  categories: Category[] = [];
  page = 0;
  totalPages: number[] = [];
  totalPage = 0;
  nameCustomer = '';
  categoryName = '';
  currentPage = 0;
  isSearchFormActive = false;

  constructor(private productService: ProductServiceService, private categoryService: CategoryServiceService) {
  }

  getAllProduct() {
    this.productService.getContractNotPay('', '', 0).subscribe(next => {
      this.contracts = next.content;
      this.totalPage = next.totalPages;
      this.currentPage = next.number;
      for (let j = 0; j < this.totalPage; j++) {
        this.totalPages.push(j);
      }
      console.log(next);
      console.log(this.contracts);
      console.log(this.totalPages);
      console.log('currentPage', this.currentPage);
    });
  }


  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProduct();
  }


  getAllCategory() {
    this.categoryService.findAll().subscribe(next => {
      this.categories = next;
      console.log(this.categories);
    });
  }

  search(nameCustomer: string, categoryName: string) {
    const specialCharPattern = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    this.nameCustomer = nameCustomer;
    this.categoryName = categoryName;
    console.log(nameCustomer, categoryName);
    this.page = 0;
    if (specialCharPattern.test(this.nameCustomer) || this.nameCustomer.length > 24) {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi',
        text: 'Chuổi không được chứa kí tự đặc biệt và lớn hơn 24 kí',
        position: 'top-end',
        toast: true,
        showConfirmButton: false,
        timer: 3000  // Adjust the duration of the alert (in milliseconds) as needed
      });
    } else {
      // @ts-ignore
      this.productService.getContractNotPay(this.nameCustomer, this.categoryName, this.page).subscribe(next => {
        console.log(next);
        this.contracts = next.content;
        this.totalPage = next.totalPages;
        this.currentPage = next.number;
        this.totalPages = [];
        console.log('currentPage', this.currentPage);
        for (let j = 0; j < this.totalPage; j++) {
          this.totalPages.push(j);
        }
        console.log(this.totalPages);
        console.log(this.contracts);

      });
    }
  }

  nextPage() {
    // @ts-ignore
    this.page++;
    // @ts-ignoretự
    this.productService.getContractNotPay(this.nameCustomer, this.categoryName, this.page).subscribe(next => {
      this.contracts = next.content;
      this.currentPage = next.number;
      console.log(this.page);
    });
  }

  previousPage() {
    this.page--;
    this.productService.getContractNotPay(this.nameCustomer, this.categoryName, this.page).subscribe(next => {
      this.contracts = next.content;
      this.currentPage = next.number;
    });

  }


  accessPage(page: number) {
    this.page = page;
    this.productService.getContractNotPay(this.nameCustomer, this.categoryName, page).subscribe(next => {
      this.contracts = next.content;
      this.currentPage = next.number;
    });

  }

  toggleFormSearch($event: MouseEvent) {
    event.stopPropagation();
    this.isSearchFormActive = !this.isSearchFormActive;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const formSearchElement = document.querySelector('.form-search');
    const searchBoxElement = document.querySelector('.searchBox');
    const isOutsideFormSearch =
      formSearchElement &&
      !formSearchElement.contains(event.target as HTMLElement);
    const isInsideSearchBox =
      searchBoxElement &&
      searchBoxElement.contains(event.target as HTMLElement);
    if (this.isSearchFormActive && isOutsideFormSearch && !isInsideSearchBox) {
      this.isSearchFormActive = false;

    }
  }

}
