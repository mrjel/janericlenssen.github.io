// The module.exports object at the bottom is the data that powers the index.njk
// template file. When you start seeing {% %} and {{ }}, these are referring to
// objects in this file.
//
// This file is a JavaScript file that runs when the site is generated, which
// lets us flexibly prepare the data and simplifies the template.


module.exports = {
    publications: [
        {
            title: "Spurfies: Sparse Surface Reconstruction using Local Geometry Priors",
            teaser: "figures/spurfies.png",
            authors: "Kevin Raj, Christopher Wewer, Raza Yunus, Eddy Ilg, Jan Eric Lenssen",
            conference: "arXiv preprint",
            data: ["[Project Page]".link("https://geometric-rl.mpi-inf.mpg.de/spurfies/"),"[Paper]".link("https://arxiv.org/pdf/2408.16544")].join(" "),
            abstract: "A method leveraging synthetic data to learn local surface priors for surface reconstruction from few images. Can be applied to both bounded and unbounded scenes.",
        },
        {
            title: "InterTrack: Tracking Human Object Interaction without Object Templates",
            teaser: "figures/intertrack.gif",
            authors: "Xianghui Xie, Jan Eric Lenssen, Gerard Pons-Moll",
            conference: "arXiv preprint",
            data: ["[Project Page]".link("https://virtualhumans.mpi-inf.mpg.de/InterTrack/"),"[Paper]".link("https://arxiv.org/pdf/2408.13953")].join(" "),
            abstract: "A tracker for dynamic humans and objects under occlusion from a monocular RGB video without object templates. Trained on synthetic data and generalizing to in-the-wild videos.",
        },
        {
            title: "Improving 2D Feature Representations by 3D-Aware Fine-Tuning",
            teaser: "figures/fit3d.gif",
            authors: "Yuanwen Yue, Anurag Das, Francis Engelmann, Siyu Tang, Jan Eric Lenssen",
            conference: "ECCV 2024 (accepted for publication)",
            data: ["[Project Page]".link("https://ywyue.github.io/FiT3D/"),"[Paper]".link("https://arxiv.org/pdf/2407.20229")].join(" "),
            abstract: "We show that finetuning 2D foundation models with descriptors that have been fused into a 3D Gaussian representation improves feature quality for downstream tasks.",
        },
        {
            title: "latentSplat: Autoencoding Variational Gaussians for Fast Generalizable 3D Reconstruction",
            teaser: "figures/latentsplat.gif",
            authors: "Christopher Wewer, Kevin Raj, Eddy Ilg, Bernt Schiele, Jan Eric Lenssen",
            conference: "ECCV 2024 (accepted for publication)",
            data: ["[Project Page]".link("https://geometric-rl.mpi-inf.mpg.de/latentsplat/"),"[Paper]".link("https://arxiv.org/pdf/2403.16292.pdf")].join(" "),
            abstract: "A fast autoencoder that encodes image pairs into 3D variational feature Gaussians that model uncertainty individually for different locations in 3D space. Trained purely on videos.",
        },
        {
            title: "RelBench: A Benchmark for Deep Learning on Relational Databases",
            teaser: "figures/relbench.png",
            authors: "Joshua Robinson, Rishabh Ranjan, Weihua Hu, Kexin Huang, Jiaqi Han, Alejandro Dobles, Matthias Fey, Jan Eric Lenssen, Yiwen Yuan, Zecheng Zhang, Xinwei He, Jure Leskovec",
            conference: "arXiv preprint",
            data: ["[Project Page]".link("https://relbench.stanford.edu/"),"[Paper]".link("https://arxiv.org/pdf/2407.20060")].join(" "),
            abstract: "An open benchmark for machine learning on relational databases. Contains a collection of realistic, large-scale, and diverse benchmark datasets, a leaderboard and unified evaluation.",
        },
        {
            title: "Neural Parametric Gaussians for Monocular Non-Rigid Object Reconstruction",
            teaser: "figures/npg_teaser.gif",
            authors: "Devikalyan Das, Christopher Wewer, Raza Yunus, Eddy Ilg, Jan Eric Lenssen",
            conference: "CVPR 2024",
            data: ["[Project Page]".link("https://geometric-rl.mpi-inf.mpg.de/npg/"),"[Paper]".link("https://arxiv.org/pdf/2312.01196.pdf")].join(" "),
            abstract: "A two-stage approach for non-rigid reconstruction from monocular videos. A coarse point template is found first to act as regularization for a local 3D Gaussians representation.",
        },
        {
            title: "NRDF: Neural Riemannian Distance Fields for Learning Articulated Pose Priors",
            teaser: "figures/nrdf.png",
            authors: "Yannan He, Garvita Tiwari, Tolga Birdal, Jan Eric Lenssen, Gerard Pons-Moll",
            conference: "CVPR 2024",
            pubnote: "(Highlight)",
            data: ["[Project Page]".link("https://virtualhumans.mpi-inf.mpg.de/nrdf/"),"[Paper]".link("https://arxiv.org/pdf/2403.03122.pdf")].join(" "),
            abstract: "A method to learn data priors for articulated poses (humans, hands, animals) using a Riemannian distance field formulation and Riemmanian gradient descent.",
        },
        {
            title: "Template Free Reconstruction of Human-object Interaction with Procedural Interaction Generation",
            teaser: "figures/procigen.gif",
            authors: "Xianghui Xie, Bharat Bhatnagar, Jan Eric Lenssen, Gerard Pons-Moll",
            conference: "CVPR 2024",
            pubnote: "(Highlight)",
            data: ["[Project Page]".link("https://virtualhumans.mpi-inf.mpg.de/procigen-hdm/"),"[Paper]".link("https://arxiv.org/pdf/2312.07063.pdf")].join(" "),
            abstract: "A hierarchical diffusion model for human-object interaction reconstruction from single image, trained on ProciGen, a large-scale, automatically created, synthetic dataset.",
        },
        {
            title: "Neural Point Cloud Diffusion for Disentangled 3D Shape and Appearance Generation",
            teaser: "figures/npcd.png",
            authors: "Philipp Schröppel, Christopher Wewer, Jan Eric Lenssen, Eddy Ilg, Thomas Brox",
            conference: "CVPR 2024",
            data: ["[Paper]".link("https://arxiv.org/pdf/2312.14124.pdf")].join(" "),
            abstract: "A denoising diffusion method on point clouds with features defining a radiance field. The disentangled representation allows for individual generation of shape and appearance.",
        },
        {
            title: "GEARS: Local Geometry-aware Hand-object Interaction Synthesis",
            teaser: "figures/gears.png",
            authors: "Keyang Zhou, Bharat Bhatnagar, Jan Eric Lenssen, Gerard Pons-Moll",
            conference: "CVPR 2024",
            data: ["[Project Page]".link("https://virtualhumans.mpi-inf.mpg.de/gears/"),"[Paper]".link("https://virtualhumans.mpi-inf.mpg.de/papers/zhou24gears/gears.pdf")].join(" "),
            abstract: "A method to generate realistic grasping sequences of hands, given wrist trajectory and object. We use local sensors on hand joints to obtain features independent of global object information.",
        },
        {
            title: "Relational Deep Learning: Graph Representation Learning on Relational Databases",
            teaser: "figures/rdl.png",
            authors: "Matthias Fey, Weihua Hu, Kexin Huang, Jan Eric Lenssen, Rishabh Ranjan, Joshua Robinson, Rex Ying, Jiaxuan You, Jure Leskovec",
            conference: "ICML 2024 Position Papers",
            data: ["[Project Page]".link("https://relbench.stanford.edu/"),"[Paper]".link("https://arxiv.org/pdf/2312.04615.pdf")].join(" "),
            abstract: "A position paper introducing the concept of relational deep learning, an end-to-end framework to learn directly on relational databases using graph neural networks.",
        },
        {
            title: "Recent Trends in 3D Reconstruction of General Non-Rigid Scenes",
            teaser: "figures/eurographics2024.png",
            authors: "Raza Yunus,  Jan Eric Lenssen, Michael Niemeyer, Yiyi Liao, Christian Rupprecht, Christian Theobalt, Gerard Pons-Moll, Jia-Bin Huang, Vladislav Golyanik, Eddy Ilg",
            conference: "Eurographis State of the Art Reports 2024",
            data: ["[Project Page]".link("https://razayunus.github.io/non-rigid-star"),"[Paper]".link("https://arxiv.org/abs/2403.15064")].join(" "),
            abstract: "A state of the art report for 3D reconstruction of general non-rigid scenes, covering 3D and 4D representations, deformation models, generalizable reconstruction, automatic decomposition and editing.",
        },
        {
            title: "SimNP: Learning Self-Similarity Priors between Neural Points",
            teaser: "figures/simnp.png",
            authors: "Christopher Wewer, Eddy Ilg, Bernt Schiele, Jan Eric Lenssen",
            conference: "ICCV 2023",
            data: ["[Project Page]".link("https://geometric-rl.mpi-inf.mpg.de/simnp/"), "[Paper]".link("https://arxiv.org/abs/2309.03809")].join(" "),
            abstract: "A renderable neural point radiance field that learns category-level self-similarities from data by connecting coherent neural points to embeddings via optimized bipartite attention scores.",
        },
        {
            title: "Pose-NDF: Modeling Human Pose Manifolds with Neural Distance Fields",
            teaser: "figures/posendf.png",
            authors: "Garvita Tiwari, Dimitrije Antic, Jan Eric Lenssen, Nikolaos Sarafianos, Tony Tung, Gerard Pons-Moll",
            conference: "ECCV 2022",
            pubnote: "(Oral Presentation, Best Paper Honorable Mention Award)",
            data: ["[Project Page]".link("https://virtualhumans.mpi-inf.mpg.de/posendf/"), "[Paper]".link("https://arxiv.org/pdf/2207.13807.pdf"), "[Code]".link("https://github.com/garvita-tiwari/PoseNDF")].join(" "),
            abstract: "An unsigned neural distance field that models the manifold of plausible human poses in high-dimensional SO(3). Given human poses can be projected onto the manifold by SO(3) gradient descent.",
        },
        {
            title: "TOCH: Spatio-Temporal Object-to-Hand Correspondence for Motion Refinement",
            teaser: "figures/zhou22toch.gif",
            authors: "Keyang Zhou, Bharat Lal Bathnagar, Jan Eric Lenssen, Gerard Pons-Moll",
            conference: "ECCV 2022",
            data: ["[Project Page]".link("https://virtualhumans.mpi-inf.mpg.de/toch/"), "[Paper]".link("https://arxiv.org/pdf/2205.07982.pdf"), "[Code]".link("https://github.com/kzhou23/toch")].join(" "),
            abstract: "A spatio-temporal representation of point-wise correspondences between a parameterized hand template mesh and an object mesh, which allows for refining captured grasping motions.",
        },
        {
            title: "GnnAutoScale: Scalable and Expressive Graph Neural Networks via Historical Embeddings",
            teaser: "figures/gnnautoscale.png",
            authors: "Matthias Fey, Jan Eric Lenssen, Frank Weichert, Jure Leskovec",
            conference: "ICML 2021",
            data: ["[Paper]".link("https://arxiv.org/pdf/2106.05609.pdf"), "[Code]".link("https://github.com/rusty1s/pyg_autoscale")].join(" "),
            abstract: "A framework to scale arbitrary message passing graph neural networks to large input graphs using historical embeddings. The scaling method provably preserves the GNN expressiveness.",
        },
        {
            title: "Quaternion Equivariant Capsule Networks for 3D Point Clouds",
            teaser: "figures/3dcaps.png",
            authors: "Yongheng Zhao, Tolga Birdal, Jan Eric Lenssen, Emanuele Menegatti, Leonidas Guibas, Federico Tombari",
            conference: "ECCV 2020",
            pubnote: "(Oral Presentation)",
            data: ["[Paper]".link("https://arxiv.org/pdf/1912.12098.pdf"), "[Code]".link("https://github.com/tolgabirdal/qecnetworks")].join(" "),
            abstract: "A provably SO(3)-equivariant capsule network architecture to classify and canonicalize point clouds. Introduces a routing mechanism based on the iterative least-squares Weiszfeld algorithm.",
        },
        {
            title: "Deep Local Shapes: Learning Local SDF Priors for Detailed 3D Reconstruction",
            teaser: "figures/deepls.png",
            authors: "Rohan Chabra, Jan E. Lenssen, Eddy Ilg, Tanner Schmidt, Julian Straub, Steven Lovegrove, Richard Newcombe",
            conference: "ECCV 2020",
            data: ["[Paper]".link("hhttps://arxiv.org/pdf/2003.10983.pdf")],
            abstract: "A voxel grid of implicit neural fields as local priors for representing signed distance functions. Enables detailed 3D reconstructions of full scenes while only using synthetic training data.",
        },
        {
            title: "Deep Iterative Surface Normal Estimation",
            teaser: "figures/disne2.png",
            authors: "Jan Eric Lenssen, Christian Osendorfer, Jonathan Masci",
            conference: "CVPR 2020",
            pubnote: "(Oral Presentation, Best Paper Nominee)",
            data: ["[Paper]".link("https://arxiv.org/pdf/1904.07172.pdf"), "[Code]".link("https://github.com/nnaisense/deep-iterative-surface-normal-estimation")].join(" "),
            abstract: "A differentiable, iterative re-weighted least-squares (IRLS) algorithm for normal estimation on unstructured point clouds. The method combines the efficiency of traditional IRLS with a GNN data prior.",
        },
        {
            title: "Deep Graph Matching Consensus",
            teaser: "figures/dgmc.png",
            authors: "Matthias Fey, Jan Eric Lenssen, Christopher Morris, Jonathan Masci, Nils Kriege",
            conference: "ICLR 2020",
            data: ["[Paper]".link("https://arxiv.org/pdf/2001.09621.pdf"), "[Code]".link("https://github.com/rusty1s/deep-graph-matching-consensus")].join(" "),
            abstract: "A two-stage siamese graph neural network for graph matching in several applications. Refines local feature matchings by optimizing neighborhood consensus in the second stage.",
        },
        {
            title: "Weisfeiler and leman go neural: Higher-order graph neural networks",
            teaser: "figures/kgnn.png",
            authors: "Christopher Morris, Martin Ritzert, Matthias Fey, William Hamilton, Jan E. Lenssen, Gaurav Rattan, Martin Grohe",
            conference: "AAAI 2019",
            data: ["[Paper]".link("https://arxiv.org/pdf/1810.02244.pdf"), "[Code]".link("https://github.com/chrsmrrs/k-gnn")].join(" "),
            abstract: "Shows equivalence in expressiveness of specific graph neural networks and the Weisfeiler-Leman graph isomorphy test. Introduces higher order GNNs with provably more expressiveness.",
        },
        {
            title: "Fast Graph Representation Learning with PyTorch Geometric",
            teaser: "figures/pyg.png",
            authors: "Matthias Fey, Jan Eric Lenssen",
            conference: "ICLR 2019 Workshop",
            data: ["[Website]".link("https://www.pyg.org/"), "[Paper]".link("https://arxiv.org/pdf/1903.02428.pdf"), "[Code]".link("https://github.com/pyg-team/pytorch_geometric")].join(" "),
            abstract: "Heavily used PyTorch-based library to write and train graph neural networks for several applications. Implements efficient, differentiable and customizable message passing on GPU and CPU.",
        },
        {
            title: "Group Equivariant Capsule Networks",
            teaser: "figures/groupcaps.png",
            authors: "Jan Eric Lenssen, Matthias Fey, Pascal Libuschewski",
            conference: "NeurIPS 2018",
            data: ["[Paper]".link("https://arxiv.org/pdf/1806.05086.pdf"), "[Code]".link("https://github.com/janericlenssen/group_equivariant_capsules_pytorch")].join(" "),
            abstract: "A provably group equivariant capsule network for rotation invariant classification and pose estimation. Introduces an equivariant dynamic routing algorithm for images.",
        },
        {
            title: "SplineCNN: Fast geometric deep learning with continuous B-spline kernels",
            teaser: "figures/splinecnn.png",
            authors: "Matthias Fey*, Jan Eric Lenssen*, Frank Weichert, Heinrich Müller",
            conference: "CVPR 2018",
            data: ["[Paper]".link("https://arxiv.org/pdf/1711.08920.pdf"), "[Code]".link("https://github.com/rusty1s/pytorch_spline_conv")].join(" "),
            abstract: "A differentiable operator for continuous convolution on irregular-structured data. Parameterizes a continuous kernel using B-splines and provides efficient GPU implementations via message passing.",
        },
        {
            title: "Real-time Low SNR Signal Processing for Nanoparticle Analysis with Deep Neural Networks",
            teaser: "figures/biosignals.png",
            authors: "Jan Eric Lenssen, Anas Toma, Albert Seebold, Victoria Shpacovitch, Pascal Libuschewski, Frank Weichert, Jian-Jia Chen, Roland Hergenröder",
            conference: "BIOSIGNALS 2018",
            pubnote: "(Best Paper Award)",
            data: ["[Paper]".link("https://www.scitepress.org/papers/2018/65964/65964.pdf")],
            abstract: "A multistage CNN architecture for detecting low-SNR particles in images from a surface plasmon resonance sensor. The method performs detection, classification and size estimation of nanoparticles.",
        },
    ],
};