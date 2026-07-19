/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Send } from 'lucide-react';

export interface FieldDef {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  /** Occupe une demi-largeur (grille 2 colonnes) sur desktop */
  half?: boolean;
}

export interface StepDef {
  title: string;
  fields: FieldDef[];
}

interface MentoratFormProps {
  title: string;
  subtitle: string;
  steps: StepDef[];
  confirmTitle: string;
  confirmMessage: string;
}

type FormData = Record<string, string | boolean>;

const inputClass =
  'w-full p-4 rounded-2xl border border-card-border focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all bg-app font-sans text-sm text-app';

const isFilled = (v: string | boolean | undefined, f: FieldDef) => {
  if (f.type === 'checkbox') return v === true;
  return typeof v === 'string' && v.trim().length > 0;
};

const MentoratForm = ({ title, subtitle, steps, confirmTitle, confirmMessage }: MentoratFormProps) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({});
  const [submitted, setSubmitted] = useState(false);

  const current = steps[step];
  const isLast = step === steps.length - 1;

  const stepValid = current.fields.every((f) => (f.required ? isFilled(data[f.name], f) : true));

  const set = (name: string, value: string | boolean) =>
    setData((d) => ({ ...d, [name]: value }));

  const next = () => {
    if (!stepValid) return;
    if (isLast) {
      // Mode démo : aucune donnée n'est transmise (branchement Supabase en Phase B).
      setSubmitted(true);
    } else {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prev = () => setStep((s) => Math.max(0, s - 1));

  if (submitted) {
    return (
      <div className="min-h-screen bg-app flex items-center justify-center py-24 px-4 transition-colors duration-300">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-card-bg p-12 md:p-16 rounded-[2.5rem] shadow-2xl text-center max-w-xl border border-card-border"
        >
          <div className="bg-emerald-500/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="h-10 w-10 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4">{confirmTitle}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{confirmMessage}</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setStep(0);
              setData({});
            }}
            className="text-primary font-bold uppercase tracking-widest text-xs hover:underline"
          >
            Remplir un nouveau formulaire
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-app text-app transition-colors duration-300">
      {/* En-tête */}
      <section className="relative academic-gradient text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-blue-50/80 leading-relaxed font-sans font-light">{subtitle}</p>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 bg-app">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-10">
            {steps.map((s, i) => (
              <div key={s.title} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      i < step
                        ? 'bg-primary text-white'
                        : i === step
                          ? 'bg-primary text-white ring-4 ring-primary/15'
                          : 'bg-card-bg border border-card-border text-muted-foreground'
                    }`}
                  >
                    {i < step ? <Check className="h-4 w-4" /> : i + 1}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-2 ${i < step ? 'bg-primary' : 'bg-card-border'}`} />
                )}
              </div>
            ))}
          </div>

          <div className="bg-card-bg border border-card-border rounded-[2rem] p-8 md:p-10">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">
              Étape {step + 1} / {steps.length}
            </div>
            <h2 className="text-xl font-bold mb-8">{current.title}</h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {current.fields.map((f) => {
                  const colSpan = f.half ? 'sm:col-span-1' : 'sm:col-span-2';
                  const value = data[f.name];

                  if (f.type === 'checkbox') {
                    return (
                      <label
                        key={f.name}
                        className={`${colSpan} flex items-start gap-3 cursor-pointer p-4 rounded-2xl border border-card-border hover:border-primary/40 transition-all`}
                      >
                        <input
                          type="checkbox"
                          checked={value === true}
                          onChange={(e) => set(f.name, e.target.checked)}
                          className="mt-1 h-4 w-4 accent-[var(--color-primary)]"
                        />
                        <span className="text-sm text-app leading-relaxed">
                          {f.label}
                          {f.required && <span className="text-highlight"> *</span>}
                        </span>
                      </label>
                    );
                  }

                  return (
                    <div key={f.name} className={colSpan}>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        {f.label}
                        {f.required && <span className="text-highlight"> *</span>}
                      </label>
                      {f.type === 'textarea' ? (
                        <textarea
                          rows={3}
                          value={(value as string) || ''}
                          onChange={(e) => set(f.name, e.target.value)}
                          placeholder={f.placeholder}
                          className={inputClass}
                        />
                      ) : f.type === 'select' ? (
                        <select
                          value={(value as string) || ''}
                          onChange={(e) => set(f.name, e.target.value)}
                          className={inputClass}
                        >
                          <option value="">Sélectionner…</option>
                          {f.options?.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={f.type || 'text'}
                          value={(value as string) || ''}
                          onChange={(e) => set(f.name, e.target.value)}
                          placeholder={f.placeholder}
                          className={inputClass}
                        />
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10">
              <button
                onClick={prev}
                disabled={step === 0}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground disabled:opacity-0 hover:text-app transition-all"
              >
                <ArrowLeft className="h-4 w-4" /> Retour
              </button>
              <button
                onClick={next}
                disabled={!stepValid}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
              >
                {isLast ? (
                  <>
                    Envoyer <Send className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Continuer <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            * Champs obligatoires. Vos données ne sont utilisées que dans le cadre du programme de
            mentorat.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MentoratForm;
