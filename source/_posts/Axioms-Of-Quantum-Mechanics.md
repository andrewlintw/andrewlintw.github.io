---
title: "Axioms Of Quantum Mechanics"
date: 2026-08-27 18:47:39
tags: [quantum]
categories: [Quantum]
mathjax: true
---

This post serve as a note for.[^1]

# States

The state of a quantum mechanical system is given by a non-zero vector
in a complex vector space $\mathcal{H}$ with Hermitian inner product
$\left< \cdot, \cdot \right>$.

> The space $\mathcal{H}$ may be finite or infinite dimensional. If it
> is infinite dimensional, we require it to be a Hilbert space.\
> The space is always linear.\
> We denote the vectors (states) in the space $\mathcal{H}$ by the
> notation $$\left\lvert \psi \right\rangle.$$

# States

The observables of a quantum mechanical system are given by self-adjoint
linear operators on $\mathcal{H}$.\
If a state is an eigenvector of a specific self-adjoint operator, then
the eigenvalue is real (which is promised by the self-adjointness), and
that value may correspond to an observable quantity which characterizes
classical states.

# Dynamics

There is a distinguished quantum observable, which is the Hamiltonian
$H$. Time evolution of states
$\left\lvert \psi(t) \right\rangle \in \mathcal{H}$ is given by the
Schrödinger equation,
$$j\hbar\frac{d}{dt}\left\lvert \psi(t) \right\rangle = H\left\lvert \psi(t) \right\rangle.$$

# The Born Probability Rule

Given an observable $O$ and two unit-normed states
$\left\lvert \psi_1 \right\rangle$ and
$\left\lvert \psi_2 \right\rangle$ that are eigenvectors of $O$ with
distinct eigenvalues $\lambda_1$ and $\lambda_2$,
$$O\left\lvert \psi_1 \right\rangle = \lambda_1\left\lvert \psi_1 \right\rangle, \qquad O\left\lvert \psi_2 \right\rangle =
        \lambda_2\left\lvert \psi_2 \right\rangle$$ then the linear
combination of the two states, which is also a valid state, will give
either $\lambda_1$ or $\lambda_2$ when measured. If the state is given
by
$c_1\left\lvert \psi_1 \right\rangle + c_2\left\lvert \psi_2 \right\rangle$,
then the resulting probabilities is given by
$$\Pr(\lambda_1) = \frac{\left\lvert c_1^2 \right\rvert}{\left\lvert c_1^2 \right\rvert + \left\lvert c_2^2 \right\rvert},
    \qquad \Pr(\lambda_2) = \frac{\left\lvert {c_2^2} \right\rvert}{\left\lvert {c_1^2} \right\rvert +
    \left\lvert {c_2^2} \right\rvert}.$$

[^1]: [Peter Woit, *Quantum Theory, Groups and Representations*
    (Springer International Publishing, 2017),
    <https://doi.org/10.1007/978-3-319-64612-1>](#ref-woitQuantumTheoryGroups2017).
