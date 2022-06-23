<script>
import Layout from "../../../layouts/main";

export default {
    data(){
        return {

        }
    },
    components: {
        Layout,
    },
}
</script>

<template>
    <Layout :pagetitle="'Products'">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Top Product</h4>
                    </div>
                    <div class="card-body">
                        <div class="row mb-4">
                            <div class="col-xl-4 col-sm-6">
                                <h6 class="text-uppercase">Price</h6>
                                <div id="priceslider"></div>
                            </div>
                            <div class="col-xl-8 col-sm-6">
                                <form class="mt-4 mt-sm-0 float-sm-end d-sm-flex align-items-center">
                                    <div class="search-box me-2">
                                        <div class="position-relative">
                                            <input type="text" class="form-control border-0 bg-light" placeholder="Search...">
                                            <i class="search-icon" data-eva="search-outline" data-eva-height="26" data-eva-width="26"></i>
                                        </div>
                                    </div>

                                    <ul class="nav nav-pills product-view-nav justify-content-end mt-3 mt-sm-0" role="tablist">
                                        <li class="nav-item waves-effect waves-light">
                                            <a class="nav-link active" data-bs-toggle="tab" href="#product" role="tab">
                                                <i class="bx bx-grid-alt"></i>
                                            </a>
                                        </li>
                                        <li class="nav-item waves-effect waves-light">
                                            <a class="nav-link" data-bs-toggle="tab" href="#product-list" role="tab">
                                                <i class="bx bx-list-ul"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-xl-12">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="product" role="tabpanel">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="col-md-5">
                                                                <img src="@/assets/images/product/img-1.jpg" class="img-fluid rounded" alt="">
                                                            </div>
                                                            <div class="col-md-7">
                                                                <div class="mt-3 mt-lg-0">
                                                                    <div class="dropdown float-end">
                                                                        <a class="text-muted dropdown-toggle font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                            <i class="bx bx-dots-horizontal-rounded"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <a class="dropdown-item" href="#">Edit</a>
                                                                            <a class="dropdown-item" href="#">Action</a>
                                                                            <a class="dropdown-item" href="#">Remove</a>
                                                                        </div>
                                                                    </div>
            
                                                                    <h4 class="mb-2 font-size-20 text-truncate"><router-link to="/ecommerce/product-detail" class="text-dark">Waterproof Mobile Phone </router-link></h4>
                                                                    <p class="text-muted mb-0">
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star-half text-warning"></i>
                                                                    </p>
            
                                                                    <ul class="list-unstyled ps-0 mb-0 mt-3">
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 12MP TrueDepth front camera </p></li>
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Battery life: Up to 22 hours of video playback</p></li>
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 5G and Gigabit LTE</p></li>
                                                                        <li><p class="text-muted mb-0 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Face ID for secure authentication</p></li>
                                                                    </ul>
            
                                                                    <h3 class="mb-0 mt-4"><span class="text-muted me-2"><del class="font-size-22 fw-normal">$500</del></span><b>$450</b></h3>
            
                                                                    <div class="mt-4">
                                                                        <button type="button" class="btn btn-primary waves-effect waves-light"><i class="bx bx-cart me-2 font-size-15 align-middle"></i> Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="col-md-5">
                                                                <img src="@/assets/images/product/img-2.jpg" class="img-fluid rounded" alt="">
                                                            </div>
                                                            <div class="col-md-7">
                                                                <div class="mt-3 mt-lg-0">
                                                                    <div class="dropdown float-end">
                                                                        <a class="text-muted dropdown-toggle font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                            <i class="bx bx-dots-horizontal-rounded"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <a class="dropdown-item" href="#">Edit</a>
                                                                            <a class="dropdown-item" href="#">Action</a>
                                                                            <a class="dropdown-item" href="#">Remove</a>
                                                                        </div>
                                                                    </div>
            
                                                                    <h4 class="mb-2 font-size-20 text-truncate"><router-link to="/ecommerce/product-detail" class="text-dark">Smartphone Dual Camera </router-link></h4>
                                                                    <p class="text-muted mb-0">
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                    </p>
            
                                                                    <ul class="list-unstyled ps-0 mb-0 mt-3">
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 32MP TrueDepth front camera </p></li>
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Battery life: Up to 22 hours of video playback</p></li>
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 5G and Gigabit LTE</p></li>
                                                                        <li><p class="text-muted mb-0 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Fast-charge capable</p></li>
                                                                    </ul>
            
                                                                    <h3 class="mb-0 mt-4"><span class="text-muted me-2"><del class="font-size-22 fw-normal">$280</del></span><b>$240</b></h3>
            
                                                                    <div class="mt-4">
                                                                        <button type="button" class="btn btn-primary waves-effect waves-light"><i class="bx bx-cart me-2 font-size-15 align-middle"></i> Add To Cart</button>
                                                                    </div>
                                                                </div>
        
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="col-md-5">
                                                                <img src="@/assets/images/product/img-3.jpg" class="img-fluid rounded" alt="">
                                                            </div>
                                                            <div class="col-md-7">
                                                                <div class="mt-3 mt-lg-0">
                                                                    <div class="dropdown float-end">
                                                                        <a class="text-muted dropdown-toggle font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                            <i class="bx bx-dots-horizontal-rounded"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <a class="dropdown-item" href="#">Edit</a>
                                                                            <a class="dropdown-item" href="#">Action</a>
                                                                            <a class="dropdown-item" href="#">Remove</a>
                                                                        </div>
                                                                    </div>
            
                                                                    <h4 class="mb-2 font-size-20 text-truncate"><router-link to="/ecommerce/product-detail" class="text-dark">Black Colour Smartphone</router-link></h4>
                                                                    <p class="text-muted mb-0">
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                    </p>
            
                                                                    <ul class="list-unstyled ps-0 mb-0 mt-3">
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 5G and Gigabit LTE </p></li>
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> LiDAR Scanner for Night mode</p></li>
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 5G and Gigabit LTE</p></li>
                                                                        <li><p class="text-muted mb-0 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Face ID for secure authentication</p></li>
                                                                    </ul>
            
                                                                    <h3 class="mb-0 mt-4"><span class="text-muted me-2"><del class="font-size-22 fw-normal">$750</del></span><b>$950</b></h3>
            
                                                                    <div class="mt-4">
                                                                        <button type="button" class="btn btn-primary waves-effect waves-light"><i class="bx bx-cart me-2 font-size-15 align-middle"></i> Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="col-md-5">
                                                                <img src="@/assets/images/product/img-4.jpg" class="img-fluid rounded" alt="">
                                                            </div>
                                                            <div class="col-md-7">
                                                                <div class="mt-3 mt-lg-0">
                                                                    <div class="dropdown float-end">
                                                                        <a class="text-muted dropdown-toggle font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                            <i class="bx bx-dots-horizontal-rounded"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <a class="dropdown-item" href="#">Edit</a>
                                                                            <a class="dropdown-item" href="#">Action</a>
                                                                            <a class="dropdown-item" href="#">Remove</a>
                                                                        </div>
                                                                    </div>
            
                                                                    <h4 class="mb-2 font-size-20 text-truncate"><router-link to="/ecommerce/product-detail" class="text-dark">Latest Smartphone Under 20000</router-link></h4>
                                                                    <p class="text-muted mb-0">
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star-half text-warning"></i>
                                                                    </p>
            
                                                                    <ul class="list-unstyled ps-0 mb-0 mt-3">
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 20MP TrueDepth front camera </p></li>
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Fast-charge capable</p></li>
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 5G and Gigabit LTE</p></li>
                                                                        <li><p class="text-muted mb-0 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Compatible with MagSafe accessories</p></li>
                                                                    </ul>
            
                                                                    <h3 class="mb-0 mt-4"><span class="text-muted me-2"><del class="font-size-22 fw-normal">$420</del></span><b>$380</b></h3>
            
                                                                    <div class="mt-4">
                                                                        <button type="button" class="btn btn-primary waves-effect waves-light"><i class="bx bx-cart me-2 font-size-15 align-middle"></i> Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="col-md-5">
                                                                <img src="@/assets/images/product/img-5.jpg" class="img-fluid rounded" alt="">
                                                            </div>
                                                            <div class="col-md-7">
                                                                <div class="mt-3 mt-lg-0">
                                                                    <div class="dropdown float-end">
                                                                        <a class="text-muted dropdown-toggle font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                            <i class="bx bx-dots-horizontal-rounded"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <a class="dropdown-item" href="#">Edit</a>
                                                                            <a class="dropdown-item" href="#">Action</a>
                                                                            <a class="dropdown-item" href="#">Remove</a>
                                                                        </div>
                                                                    </div>
            
                                                                    <h4 class="mb-2 font-size-20 text-truncate"><router-link to="/ecommerce/product-detail" class="text-dark">New Phone Max Pro </router-link></h4>
                                                                    <p class="text-muted mb-0">
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                    </p>
            
                                                                    <ul class="list-unstyled ps-0 mb-0 mt-3">
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> MagSafe and Qi wireless charging </p></li>
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> A15 Bionic chip with new 6-core CPU </p></li>
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 5G and Gigabit LTE</p></li>
                                                                        <li><p class="text-muted mb-0 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Face ID for secure authentication</p></li>
                                                                    </ul>
            
                                                                    <h3 class="mb-0 mt-4"><span class="text-muted me-2"><del class="font-size-22 fw-normal">$470</del></span><b>$390</b></h3>
            
                                                                    <div class="mt-4">
                                                                        <button type="button" class="btn btn-primary waves-effect waves-light"><i class="bx bx-cart me-2 font-size-15 align-middle"></i> Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="col-md-5">
                                                                <img src="@/assets/images/product/img-6.jpg" class="img-fluid rounded" alt="">
                                                            </div>
                                                            <div class="col-md-7">
                                                                <div class="mt-3 mt-lg-0">
                                                                    <div class="dropdown float-end">
                                                                        <a class="text-muted dropdown-toggle font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                            <i class="bx bx-dots-horizontal-rounded"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu dropdown-menu-end">
                                                                            <a class="dropdown-item" href="#">Edit</a>
                                                                            <a class="dropdown-item" href="#">Action</a>
                                                                            <a class="dropdown-item" href="#">Remove</a>
                                                                        </div>
                                                                    </div>
            
                                                                    <h4 class="mb-2 font-size-20 text-truncate"><router-link to="/ecommerce/product-detail" class="text-dark">Smart Phone Pro +256</router-link></h4>
                                                                    <p class="text-muted mb-0">
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star text-warning"></i>
                                                                        <i class="bx bxs-star-half text-warning"></i>
                                                                    </p>
            
                                                                    <ul class="list-unstyled ps-0 mb-0 mt-3">
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 13.7 cm (5.4-inch) Super Retina HDR and True Tone</p></li>
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Battery life: Up to 22 hours of video playback</p></li>
                                                                        <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 5G and Gigabit LTE</p></li>
                                                                        <li><p class="text-muted mb-0 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Compatible with MagSafe accessories</p></li>
                                                                    </ul>
            
                                                                    <h3 class="mb-0 mt-4"><span class="text-muted me-2"><del class="font-size-22 fw-normal">$490</del></span><b>$320</b></h3>
            
                                                                    <div class="mt-4">
                                                                        <button type="button" class="btn btn-primary waves-effect waves-light"><i class="bx bx-cart me-2 font-size-15 align-middle"></i> Add To Cart</button>
                                                                    </div>
                                                                </div>
        
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="product-list" role="tabpanel">
                                        <div class="row">
                                            <div class="col-xl-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="table-responsive px-3">
                                                                <table class="table table-striped align-middle table-nowrap">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <div class="avatar-lg me-4">
                                                                                    <img src="@/assets/images/product/img-1.jpg" class="img-fluid rounded" alt="">
                                                                                </div>
                                                                            </td>
                
                                                                            <td>
                                                                                <div>
                                                                                    <h5 class="font-size-18"><router-link to="/ecommerce/product-detail" class="text-dark">Waterproof Mobile Phone</router-link></h5>
                                                                                    <p class="text-muted mb-0 mt-2 pt-2">
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star-half text-warning"></i>
                                                                                    </p>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                                <ul class="list-unstyled ps-0 mb-0">
                                                                                    <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 12MP TrueDepth front camera </p></li>
                                                                                    <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Battery life: Up to 22 hours of video playback</p></li>
                                                                                    <li><p class="text-muted mb-0 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 5G and Gigabit LTE</p></li>
                                                                                </ul>
                                                                            </td>

                                                                            <td style="width: 180px;">
                                                                                <p>Colors :</p>
                                                                                <ul class="list-inline mb-0 text-muted product-color">
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-dark"></i>
                                                                                    </li>
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-success"></i>
                                                                                    </li>
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-primary"></i>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                
                                                                            <td style="width: 220px;">
                                                                                <h3 class="mb-0 font-size-20"><span class="text-muted me-2"><del class="font-size-16 fw-normal">$500</del></span><b>$450</b></h3>
                                                                            </td>

                                                                            <td>
                                                                                <button type="button" class="btn btn-primary waves-effect waves-light"><i class="bx bx-cart me-2 font-size-15 align-middle"></i> Add To Cart</button>
                                                                            </td>

                                                                            <td>
                                                                                <div class="dropdown float-end">
                                                                                    <a class="text-muted dropdown-toggle font-size-20" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                                        <i class="bx bx-dots-horizontal-rounded"></i>
                                                                                    </a>
                                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                                        <a class="dropdown-item" href="#">Edit</a>
                                                                                        <a class="dropdown-item" href="#">Action</a>
                                                                                        <a class="dropdown-item" href="#">Remove</a>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>
                                                                                <div class="avatar-lg me-4">
                                                                                    <img src="@/assets/images/product/img-2.jpg" class="img-fluid rounded" alt="">
                                                                                </div>
                                                                            </td>
                
                                                                            <td>
                                                                                <div>
                                                                                    <h5 class="font-size-18"><router-link to="/ecommerce/product-detail" class="text-dark">Smartphone Dual Camera</router-link></h5>
                                                                                    <p class="text-muted mb-0 mt-2 pt-2">
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                    </p>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                                <ul class="list-unstyled ps-0 mb-0">
                                                                                    <li><p class="text-muted mb-0 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 5G and Gigabit LTE</p></li>
                                                                                    <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 32MP TrueDepth front camera</p></li>
                                                                                    <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Battery life: Up to 22 hours of video playback</p></li>
                                                                                </ul>
                                                                            </td>

                                                                            <td style="width: 180px;">
                                                                                <p>Colors :</p>
                                                                                <ul class="list-inline mb-0 text-muted product-color">
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-primary"></i>
                                                                                    </li>
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-danger"></i>
                                                                                    </li>
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-warning"></i>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                
                                                                            <td style="width: 220px;">
                                                                                <h3 class="mb-0 font-size-20"><span class="text-muted me-2"><del class="font-size-16 fw-normal">$280</del></span><b>$240</b></h3>
                                                                            </td>

                                                                            <td>
                                                                                <button type="button" class="btn btn-primary waves-effect waves-light"><i class="bx bx-cart me-2 font-size-15 align-middle"></i> Add To Cart</button>
                                                                            </td>

                                                                            <td>
                                                                                <div class="dropdown float-end">
                                                                                    <a class="text-muted dropdown-toggle font-size-20" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                                        <i class="bx bx-dots-horizontal-rounded"></i>
                                                                                    </a>
                                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                                        <a class="dropdown-item" href="#">Edit</a>
                                                                                        <a class="dropdown-item" href="#">Action</a>
                                                                                        <a class="dropdown-item" href="#">Remove</a>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>
                                                                                <div class="avatar-lg me-4">
                                                                                    <img src="@/assets/images/product/img-3.jpg" class="img-fluid rounded" alt="">
                                                                                </div>
                                                                            </td>
                
                                                                            <td>
                                                                                <div>
                                                                                    <h5 class="font-size-18"><router-link to="/ecommerce/product-detail" class="text-dark">Black Colour Smartphone</router-link></h5>
                                                                                    <p class="text-muted mb-0 mt-2 pt-2">
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                    </p>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                                <ul class="list-unstyled ps-0 mb-0">
                                                                                    <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 5G and Gigabit LTE </p></li>
                                                                                    <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> LiDAR Scanner for Night mode</p></li>
                                                                                    <li><p class="text-muted mb-0 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Face ID for secure authentication</p></li>
                                                                                    </ul>
                                                                            </td>

                                                                            <td style="width: 180px;">
                                                                                <p>Colors :</p>
                                                                                <ul class="list-inline mb-0 text-muted product-color">
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-info"></i>
                                                                                    </li>
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-danger"></i>
                                                                                    </li>
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-dark"></i>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                
                                                                            <td style="width: 220px;">
                                                                                <h3 class="mb-0 font-size-20"><span class="text-muted me-2"><del class="font-size-16 fw-normal">$500</del></span><b>$450</b></h3>
                                                                            </td>

                                                                            <td>
                                                                                <button type="button" class="btn btn-primary waves-effect waves-light"><i class="bx bx-cart me-2 font-size-15 align-middle"></i> Add To Cart</button>
                                                                            </td>

                                                                            <td>
                                                                                <div class="dropdown float-end">
                                                                                    <a class="text-muted dropdown-toggle font-size-20" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                                        <i class="bx bx-dots-horizontal-rounded"></i>
                                                                                    </a>
                                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                                        <a class="dropdown-item" href="#">Edit</a>
                                                                                        <a class="dropdown-item" href="#">Action</a>
                                                                                        <a class="dropdown-item" href="#">Remove</a>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>
                                                                                <div class="avatar-lg me-4">
                                                                                    <img src="@/assets/images/product/img-4.jpg" class="img-fluid rounded" alt="">
                                                                                </div>
                                                                            </td>
                
                                                                            <td>
                                                                                <div>
                                                                                    <h5 class="font-size-18"><router-link to="/ecommerce/product-detail" class="text-dark">Latest Smartphone Under 2000</router-link></h5>
                                                                                    <p class="text-muted mb-0 mt-2 pt-2">
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star-half text-warning"></i>
                                                                                    </p>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                                <ul class="list-unstyled ps-0 mb-0">
                                                                                    <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 20MP TrueDepth front camera </p></li>
                                                                                    <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> LiDAR Scanner for Night mode</p></li>
                                                                                    <li><p class="text-muted mb-0 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Compatible with MagSafe accessories</p></li>
                                                                                    </ul>
                                                                            </td>

                                                                            <td style="width: 180px;">
                                                                                <p>Colors :</p>
                                                                                <ul class="list-inline mb-0 text-muted product-color">
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-primary"></i>
                                                                                    </li>
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-success"></i>
                                                                                    </li>
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-warning"></i>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                
                                                                            <td style="width: 220px;">
                                                                                <h3 class="mb-0 font-size-20"><span class="text-muted me-2"><del class="font-size-16 fw-normal">$420</del></span><b>$380</b></h3>
                                                                            </td>

                                                                            <td>
                                                                                <button type="button" class="btn btn-primary waves-effect waves-light"><i class="bx bx-cart me-2 font-size-15 align-middle"></i> Add To Cart</button>
                                                                            </td>

                                                                            <td>
                                                                                <div class="dropdown float-end">
                                                                                    <a class="text-muted dropdown-toggle font-size-20" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                                        <i class="bx bx-dots-horizontal-rounded"></i>
                                                                                    </a>
                                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                                        <a class="dropdown-item" href="#">Edit</a>
                                                                                        <a class="dropdown-item" href="#">Action</a>
                                                                                        <a class="dropdown-item" href="#">Remove</a>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>
                                                                                <div class="avatar-lg me-4">
                                                                                    <img src="@/assets/images/product/img-5.jpg" class="img-fluid rounded" alt="">
                                                                                </div>
                                                                            </td>
                
                                                                            <td>
                                                                                <div>
                                                                                    <h5 class="font-size-18"><router-link to="/ecommerce/product-detail" class="text-dark">New Phone Max Pro</router-link></h5>
                                                                                    <p class="text-muted mb-0 mt-2 pt-2">
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                    </p>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                                <ul class="list-unstyled ps-0 mb-0">
                                                                                    <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 2MagSafe and Qi wireless charging </p></li>
                                                                                    <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> A15 Bionic chip with new 6-core CPU</p></li>
                                                                                    <li><p class="text-muted mb-0 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Compatible with MagSafe accessories</p></li>
                                                                                    </ul>
                                                                            </td>

                                                                            <td style="width: 180px;">
                                                                                <p>Colors :</p>
                                                                                <ul class="list-inline mb-0 text-muted product-color">
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-dark"></i>
                                                                                    </li>
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-danger"></i>
                                                                                    </li>
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-primary"></i>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                
                                                                            <td style="width: 220px;">
                                                                                <h3 class="mb-0 font-size-20"><span class="text-muted me-2"><del class="font-size-16 fw-normal">$470</del></span><b>$390</b></h3>
                                                                            </td>

                                                                            <td>
                                                                                <button type="button" class="btn btn-primary waves-effect waves-light"><i class="bx bx-cart me-2 font-size-15 align-middle"></i> Add To Cart</button>
                                                                            </td>

                                                                            <td>
                                                                                <div class="dropdown float-end">
                                                                                    <a class="text-muted dropdown-toggle font-size-20" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                                        <i class="bx bx-dots-horizontal-rounded"></i>
                                                                                    </a>
                                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                                        <a class="dropdown-item" href="#">Edit</a>
                                                                                        <a class="dropdown-item" href="#">Action</a>
                                                                                        <a class="dropdown-item" href="#">Remove</a>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>
                                                                                <div class="avatar-lg me-4">
                                                                                    <img src="@/assets/images/product/img-6.jpg" class="img-fluid rounded" alt="">
                                                                                </div>
                                                                            </td>
                
                                                                            <td>
                                                                                <div>
                                                                                    <h5 class="font-size-18"><router-link to="/ecommerce/product-detail" class="text-dark">Smart Phone Pro +256</router-link></h5>
                                                                                    <p class="text-muted mb-0 mt-2 pt-2">
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star text-warning"></i>
                                                                                        <i class="bx bxs-star-half text-warning"></i>
                                                                                    </p>
                                                                                </div>
                                                                            </td>

                                                                            <td>
                                                                                <ul class="list-unstyled ps-0 mb-0">
                                                                                    <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> 13.7 cm (5.4-inch) Super Retina HDR and True Tone</p></li>
                                                                                    <li><p class="text-muted mb-1 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Battery life: Up to 22 hours of video playback</p></li>
                                                                                    <li><p class="text-muted mb-0 text-truncate"><i class="mdi mdi-circle-medium align-middle text-primary me-1"></i> Compatible with MagSafe accessories</p></li>
                                                                                    </ul>
                                                                            </td>

                                                                            <td style="width: 180px;">
                                                                                <p>Colors :</p>
                                                                                <ul class="list-inline mb-0 text-muted product-color">
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-primary"></i>
                                                                                    </li>
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-warning"></i>
                                                                                    </li>
                                                                                    <li class="list-inline-item">
                                                                                        <i class="mdi mdi-circle font-size-16 text-info"></i>
                                                                                    </li>
                                                                                </ul>
                                                                            </td>
                
                                                                            <td style="width: 220px;">
                                                                                <h3 class="mb-0 font-size-20"><span class="text-muted me-2"><del class="font-size-16 fw-normal">$470</del></span><b>$320</b></h3>
                                                                            </td>

                                                                            <td>
                                                                                <button type="button" class="btn btn-primary waves-effect waves-light"><i class="bx bx-cart me-2 font-size-15 align-middle"></i> Add To Cart</button>
                                                                            </td>

                                                                            <td>
                                                                                <div class="dropdown float-end">
                                                                                    <a class="text-muted dropdown-toggle font-size-20" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                                                        <i class="bx bx-dots-horizontal-rounded"></i>
                                                                                    </a>
                                                                                    <div class="dropdown-menu dropdown-menu-end">
                                                                                        <a class="dropdown-item" href="#">Edit</a>
                                                                                        <a class="dropdown-item" href="#">Action</a>
                                                                                        <a class="dropdown-item" href="#">Remove</a>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <ul class="pagination float-end pagination-rounded mb-2">
                                    <li class="page-item disabled">
                                        <a href="javascript: void(0);" class="page-link"><i class="mdi mdi-chevron-left"></i></a>
                                    </li>
                                    <li class="page-item active">
                                        <a href="javascript: void(0);" class="page-link">1</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="javascript: void(0);" class="page-link">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="javascript: void(0);" class="page-link">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="javascript: void(0);" class="page-link">4</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="javascript: void(0);" class="page-link">5</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="javascript: void(0);" class="page-link"><i class="mdi mdi-chevron-right"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        
                    </div>
                </div> 
                <!-- end row -->

                
            </div>
        </div>
        <!-- end row -->
    </Layout>
</template>