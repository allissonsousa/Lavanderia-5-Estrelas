'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ChevronDown, Phone, Mail, MapPin, Droplet,
  Zap, Shield, Clock, DollarSign, Facebook,
  Instagram, Smartphone
} from 'lucide-react';
import { LAUNDRY_SERVICES } from '../src/constants/prices';
import { formatCurrency } from '../src/utils/formatCurrency';
import { usePriceCalculator } from '../src/hooks/usePriceCalculator';

export default function Home() {
  // Chamamos nossa lógica aqui (Parece mágica, mas é organização)
  const { quantities, updateQuantity, totalValue } = usePriceCalculator();
  const [expandedCalc, setExpandedCalc] = useState(false);
  const handleWhatsAppOrder = () => {
    const itensSelecionados = LAUNDRY_SERVICES
      .filter((s) => (quantities[s.id] || 0) > 0)
      .map((s) => `${quantities[s.id]}x ${s.name}`)
      .join(', ');

    if (!itensSelecionados) {
      alert("Selecione pelo menos um item para calcular!");
      return;
    }

    const mensagem = encodeURIComponent(
      `Olá! Gostaria de solicitar a lavagem de: ${itensSelecionados}. Total estimado: ${formatCurrency(totalValue)}`
    );

    window.open(`https://wa.me/5535997666404?text=${mensagem}`, '_blank');
    // Abre o WhatsApp com a mensagem pronta
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Header - Fixed Navigation */}
      <header className="absolute rounded-b-2xl fixed top-0 left-0 right-0 bg-white text-white shadow-lg shadow-blue-500/50 white z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-around">
          <div className="text-2xl font-bold text-brand">Lavanderia 5 estrelas</div>
          <ul className="hidden md:flex gap-8 text-brand-light font-medium">
            <li>
              <a href="#inicio" className="hover:border-b border-brand-light transition pb-1">
                Inicio
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:border-b border-brand-light transition pb-1">
                Serviços
              </a>
            </li>
            <li>
              <a href="#calcular" className="hover:border-b border-brand-light transition pb-1">
                Calcular
              </a>
            </li>
            <li>
              <a href="#vantagens" className="hover:border-b border-brand-light transition pb-1">
                Vantagens
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:border-b border-brand-light transition pb-1">
                Sobre
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:border-b border-brand-light transition pb-1">
                Contato
              </a>
            </li>
          </ul>

        </nav>
      </header>

      {/*Hero paralax image*/}

      <div className="fixed z-10 inset-0 sm:h-screen">
        <Image
          src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=839&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
        <div className='absolute inset-0 bg-blue-20/10 backdrop-blur-sm'></div>
      </div>

      {/* Hero Section */}
      <section id='inicio' className="flex relative px-4 z-20 h-screen sm:px-6 lg:px-8 bg-transparent">
        <div className="flex max-w-7xl mx-auto h-screen justify--center py-12 sm:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }} className="flex flex-col m-10 sm:text-center mb-12 justify-center" >
            <h1 className="text-7xl sm:text-5xl lg:text-8xl font-bold text-white mb-4">
              Roupas Limpas, Vida Melhor
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Serviço profissional de lavagem com a máxima qualidade
            </p>
            <p className="text-lg text-white/90">
              Entrega rápida e garantida na sua porta
            </p>
          </motion.div>

        </div>
      </section>

      {/* Main - Services Section */}
      <main id="servicos" className="relative pt-5 px-4 z-20 sm:px-6 bg-white lg:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark text-center mb-12">
            Nossos Serviços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"
                  alt="Lavagem Padrão"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-brand-dark mb-2">Lavagem Padrão</h3>
                <p className="text-gray-600">Perfeito para limpeza diária com qualidade garantida.</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=500&h=500&fit=crop"
                  alt="Lavagem Express"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-brand-dark mb-2">Lavagem Express</h3>
                <p className="text-gray-600">Serviço rápido para quando você precisa no mesmo dia.</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1546234881-6c03161c3d4d?w=500&h=500&fit=crop"
                  alt="Lavagem Delicada"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-brand-dark mb-2">Lavagem Delicada</h3>
                <p className="text-gray-600">Para roupas finas e delicadas com cuidado especial.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Article 1 - Background Image with Overlay */}
      <article className="relative z-20 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto relative h-96 sm:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1545705925-2b89bbf08734?w=1200&h=600&fit=crop"
            alt="Qualidade Premium"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-center px-4">
              Qualidade Premium em Cada Peça
            </h1>
          </div>
        </div>
      </article>

      {/* Article 2 - Price List */}
      <article className="relative z-20 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white/80">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark text-center mb-12">
            Tabela de Preços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand">
              <div className="flex items-center gap-4 mb-4">
                <DollarSign className="text-brand w-8 h-8" />
                <h3 className="text-2xl font-bold text-brand-dark">Lavagem Padrão</h3>
              </div>
              <p className="text-gray-600 mb-2">Camisetas, calças, roupa de cama</p>
              <p className="text-3xl font-bold text-brand">R$ 5,00 / kg</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand-light">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="text-brand-light w-8 h-8" />
                <h3 className="text-2xl font-bold text-brand-dark">Lavagem Express</h3>
              </div>
              <p className="text-gray-600 mb-2">Entrega em 24h</p>
              <p className="text-3xl font-bold text-brand">R$ 8,00 / kg</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand-dark md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <Droplet className="text-brand-dark w-8 h-8" />
                <h3 className="text-2xl font-bold text-brand-dark">Lavagem Delicada</h3>
              </div>
              <p className="text-gray-600 mb-2">Seda, lã, roupas delicadas - Tratamento especial</p>
              <p className="text-3xl font-bold text-brand">R$ 12,00 / kg</p>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 text-sm">
            Preços com mínimo de 3kg. Transportação incluída no bairro.
          </p>
        </div>
      </article>

      {/* Calculator Section - Accordion/Collapsible */}
      <section id="calcular" className=" relative pt-5 px-4 z-20 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Botão de abrir/fechar (Accordion) */}
          <button
            onClick={() => setExpandedCalc(!expandedCalc)}
            className="w-full bg-brand text-white p-6 rounded-lg font-bold flex items-center justify-between"
          >
            <span>Simule seu Pedido</span>
            <ChevronDown className={expandedCalc ? 'rotate-180' : ''} />
          </button>

          {expandedCalc && (
            <div className="mt-6 bg-white p-8 rounded-lg shadow-lg border-2 border-brand-light">
              {/* LISTA DE SERVIÇOS (A mágica do .map) */}
              <div className="space-y-4 mb-8">
                {LAUNDRY_SERVICES.map((service: typeof LAUNDRY_SERVICES[number]) => (
                  <div key={service.id} className="flex items-center justify-between p-3 border-b">
                    <div>
                      <p className="font-bold text-brand-dark">{service.name}</p>
                      <p className="text-sm text-gray-500">{formatCurrency(service.price)} / {service.unit}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Botão de Menos */}
                      <button
                        onClick={() => updateQuantity(service.id, -1)}
                        className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                      >-</button>

                      {/* Quantidade Atual */}
                      <span className="font-bold w-6 text-center">
                        {quantities[service.id] || 0}
                      </span>

                      {/* Botão de Mais */}
                      <button
                        onClick={() => updateQuantity(service.id, 1)}
                        className="w-8 h-8 rounded bg-brand text-white flex items-center justify-center hover:bg-brand-dark"
                      >+</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* TOTALIZADOR */}
              <p className="text-4xl font-bold text-brand-dark">
                {formatCurrency(totalValue)}
              </p>

              <button
                onClick={handleWhatsAppOrder} // Função que cria a mensagem
                className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition"
              >
                Enviar Pedido via WhatsApp
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Advantages Section */}
      <section
        id="vantagens"
        className="relative pt-5 px-4 z-20 sm:px-6 lg:px-8 py-16 sm:py-24 bg-white text-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Por Que Escolher a Gente?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-brand-light" />
              <h3 className="text-xl font-bold mb-2">Rápido</h3>
              <p className="text-brand-light/80">Entrega em 24 a 48 horas</p>
            </div>

            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-brand-light" />
              <h3 className="text-xl font-bold mb-2">Seguro</h3>
              <p className="text-brand-light/80">Suas roupas protegidas</p>
            </div>

            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-brand-light" />
              <h3 className="text-xl font-bold mb-2">Preço Justo</h3>
              <p className="text-brand-light/80">Melhor custo-benefício</p>
            </div>

            <div className="text-center">
              <Droplet className="w-12 h-12 mx-auto mb-4 text-brand-light" />
              <h3 className="text-xl font-bold mb-2">Qualidade</h3>
              <p className="text-brand-light/80">Materiais premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="relative pt-5 px-4 z-20 sm:px-6 lg:px-8 py-16 sm:py-24 bg-brand-light/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1545705925-2b89bbf08734?w=800&h=800&fit=crop"
                alt="Sobre a Lavanderia Digital"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
                Sobre Nós
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Somos uma lavanderia digital com mais de 5 anos de experiência em serviços de
                qualidade. Nossa missão é deixar suas roupas limpas e cheirosas, para que você
                tenha mais tempo para o que realmente importa.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Utilizamos equipamentos modernos, produtos ecológicos e um time preparado para
                cuidar de cada detalhe. A satisfação do cliente é nossa prioridade número um.
              </p>
              <div className="flex gap-4">
                <button className="bg-brand hover:bg-brand-dark text-white font-bold py-3 px-6 rounded-lg transition">
                  Saiba Mais
                </button>
                <button className="border-2 border-brand text-brand hover:bg-brand hover:text-white font-bold py-3 px-6 rounded-lg transition">
                  Nossa História
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 3 - Features */}
      <article className="relative pt-5 px-4 z-20 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
            Tecnologia e Cuidado em Cada Detalhe
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Combinamos inovação digital com cuidado artesanal para oferecer o melhor serviço
            de lavagem da região.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="relative h-48 sm:h-56 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=500&h=500&fit=crop"
                alt="Tecnologia"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 sm:h-56 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop"
                alt="Sustentabilidade"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 sm:h-56 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1546234881-6c03161c3d4d?w=500&h=500&fit=crop"
                alt="Atendimento"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </article>

      {/* Contact Section - WhatsApp CTA */}
      <section
        id="contato"
        className="relative pt-5 px-4 z-20 sm:px-6 lg:px-8 py-16 sm:py-24 bg-brand-dark text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Envie uma Mensagem
          </h2>
          <p className="text-lg text-brand-light mb-8 max-w-2xl mx-auto">
            Tire suas dúvidas ou faça uma encomenda diretamente via WhatsApp. Responderemos em
            minutos!
          </p>

          <form className="bg-white text-gray-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Telefone</label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea
                placeholder="Escreva sua mensagem aqui..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Enviar Mensagem
            </button>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5535997666404"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition flex items-center gap-2"
            >
              <Smartphone className="w-6 h-6" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pt-5 px-4 z-20bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-brand-light mb-2">Lavanderia Digital</h3>
              <p className="text-gray-400 text-sm">
                Seus roupas limpas, nossa responsabilidade.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@lavanderia.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo - SP</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:border-b border-brand-light transition pb-1"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:border-b border-brand-light transition pb-1"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/5535997666404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:border-b border-brand-light transition pb-1"
                >
                  <Smartphone className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Lavanderia Digital. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
